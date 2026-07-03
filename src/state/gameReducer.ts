import { teams as teamSeed } from '../data/teams'
import { companies as companySeed } from '../data/companies'
import { getGameConfig } from '../data/game'
import { buffs, buffPrice } from '../data/buffs'
import { difficulties } from '../data/quiz'
import { round1, totalAssets, holdingsValue, earlyWinCompany } from '../utils/calc'
import type { GameState, GameAction, Team, TradeBundle } from '../types'

const buffById = Object.fromEntries(buffs.map((b) => [b.id, b]))
const diffById = Object.fromEntries(difficulties.map((d) => [d.id, d]))

// ---------- khởi tạo ----------
function freshCounter() {
  return { quizDone: false, transactions: 0, extraBuys: 0, buffBought: false, tradeProposed: false }
}
function freshPerRound(teams) {
  return Object.fromEntries(teams.map((t) => [t.id, freshCounter()]))
}

export function makeInitialState(numTeams = 4): GameState {
  const config = getGameConfig(numTeams)

  const teams = teamSeed.slice(0, config.numTeams).map((t) => ({
    id: t.id,
    name: t.name,
    logo: t.logo,
    color: t.color,
    cash: config.startingCash,
    holdings: {},
    buffs: [],
    taxFreeRounds: 0,
    bankrupt: false,
  }))

  const companies = companySeed.map((c) => ({
    ...c,
    prevPrice: c.price,
    sharesAvailable: config.totalShares,
  }))

  return {
    config,
    round: 1,
    phase: 1,
    phaseEndsAt: Date.now() + config.phaseDurations[1] * 1000,
    paused: false,
    pauseLeftMs: null,
    activeTeamId: teams[0].id,
    teams,
    companies,
    perRound: freshPerRound(teams),
    trades: [],
    event: null,
    log: [{ id: 1, kind: 'sys', text: `🏁 Ván đấu bắt đầu — ${config.numTeams} tập đoàn, ${config.totalRounds} round. Mỗi đội nhận ${config.startingCash}B.` }],
    logSeq: 1,
    winner: null,
    winReason: null,
    gameOver: false,
  }
}

// Đặt lại đồng hồ cho lượt hiện tại. Đang tạm dừng → chỉ nạp lại thời lượng (đóng băng);
// khi tiếp tục mới tính hạn thực từ Date.now().
function armTimer(state, phase) {
  const ms = (state.config.phaseDurations?.[phase] ?? 45) * 1000
  if (state.paused) state.pauseLeftMs = ms
  else state.phaseEndsAt = Date.now() + ms
}

// ---------- tiện ích ----------
function pushLog(state, kind, text) {
  const id = state.logSeq + 1
  state.logSeq = id
  state.log = [{ id, kind, text }, ...state.log].slice(0, 60)
}
function findTeam(state, id)    { return state.teams.find((t) => t.id === id) }
function findCompany(state, id) { return state.companies.find((c) => c.id === id) }
function txLimit(counter)       { return 2 + counter.extraBuys }

function checkEarlyWin(state, team) {
  const threshold = state.config.earlyWinShares
  const ind = earlyWinCompany(team.holdings, state.companies, threshold)
  if (ind && !state.gameOver) {
    state.gameOver = true
    state.winner = team.id
    state.winReason = `Thâu tóm ${ind} (≥${threshold} cp) — thắng sớm!`
    pushLog(state, 'win', `👑 ${team.name} thâu tóm ${ind} và giành chiến thắng sớm!`)
  }
}

// ---------- thu thuế ----------
function collectTax(state, team) {
  if (team.bankrupt) return
  if (team.taxFreeRounds > 0) {
    team.taxFreeRounds -= 1
    pushLog(state, 'sys', `🧾 ${team.name} được miễn thuế (còn ${team.taxFreeRounds} round).`)
    return
  }
  const rate = state.config.taxRates[state.round] ?? 0
  let tax = round1((totalAssets(team, state.companies) * rate) / 100)

  if (team.cash >= tax) {
    team.cash = round1(team.cash - tax)
    pushLog(state, 'tax', `💸 ${team.name} nộp thuế ${tax}B (${rate}%).`)
    return
  }

  pushLog(state, 'tax', `⚠️ ${team.name} thiếu tiền nộp thuế ${tax}B → tự bán cổ phần.`)
  const ordered = Object.keys(team.holdings)
    .filter((id) => team.holdings[id] > 0)
    .sort((a, b) => findCompany(state, b).price - findCompany(state, a).price)

  for (const cid of ordered) {
    while (team.holdings[cid] > 0 && team.cash < tax) {
      const comp = findCompany(state, cid)
      team.cash = round1(team.cash + comp.price)
      team.holdings[cid] -= 1
      comp.sharesAvailable = Math.min(state.config.totalShares, comp.sharesAvailable + 1)
      if (team.holdings[cid] === 0) delete team.holdings[cid]
    }
  }

  if (team.cash >= tax) {
    team.cash = round1(team.cash - tax)
    pushLog(state, 'tax', `💸 ${team.name} bán cp xong, nộp thuế ${tax}B.`)
  } else {
    team.bankrupt = true
    team.cash = 0
    Object.keys(team.holdings).forEach((cid) => {
      const comp = findCompany(state, cid)
      comp.sharesAvailable = Math.min(state.config.totalShares, comp.sharesAvailable + team.holdings[cid])
    })
    team.holdings = {}
    pushLog(state, 'bankrupt', `💀 ${team.name} không đủ tiền nộp thuế → PHÁ SẢN.`)
  }
}

// ---------- cập nhật giá ----------
function updatePrices(state) {
  state.companies.forEach((c) => {
    c.prevPrice = c.price
    const mag  = 5 + Math.floor(Math.random() * 16)
    const sign = Math.random() < 0.5 ? -1 : 1
    c.price = Math.max(1, round1(c.price * (1 + (mag * sign) / 100)))
  })
}

// ---------- áp dụng sự kiện ----------
function applyEvent(state, ev) {
  if (!ev) return
  const e = ev.effect
  if (e.type === 'sector') {
    const c = findCompany(state, e.companyId)
    if (c) { c.prevPrice = c.price; c.price = Math.max(1, round1(c.price * (1 + e.pct / 100))) }
  } else if (e.type === 'market') {
    state.companies.forEach((c) => { c.prevPrice = c.price; c.price = Math.max(1, round1(c.price * (1 + e.pct / 100))) })
  } else if (e.type === 'cash') {
    state.teams.forEach((t) => { if (!t.bankrupt) t.cash = round1(t.cash + e.amount) })
  }
  pushLog(state, 'event', `${ev.icon} Sự kiện: ${ev.title} — ${ev.desc}`)
}

function finishGame(state) {
  if (state.gameOver) return
  const alive  = state.teams.filter((t) => !t.bankrupt)
  const ranked = [...alive].sort((a, b) => totalAssets(b, state.companies) - totalAssets(a, state.companies))
  state.gameOver  = true
  state.winner    = ranked[0]?.id ?? null
  state.winReason = 'Tổng tài sản cao nhất.'
  pushLog(state, 'win', `🏆 Hết Round ${state.config.totalRounds}! ${ranked[0]?.name ?? '—'} chiến thắng.`)
}

function firstAliveId(state): string | null {
  const t = state.teams.find((tt) => !tt.bankrupt)
  return t ? t.id : null
}

// Kết thúc round: thu thuế → đổi giá → (kết thúc ván | sang round mới, lượt về nhóm đầu).
function endRound(state) {
  pushLog(state, 'sys', `— Kết thúc Round ${state.round} —`)
  state.teams.forEach((t) => collectTax(state, t))
  updatePrices(state)

  if (state.teams.every((t) => t.bankrupt) || state.round >= state.config.totalRounds) {
    finishGame(state)
    state.phaseEndsAt = null
    return
  }

  state.round += 1
  state.phase  = 1
  armTimer(state, 1)
  state.perRound = freshPerRound(state.teams)
  state.trades   = []
  const first = firstAliveId(state)
  if (first) state.activeTeamId = first

  const ev = state.config.events[state.round] || null
  state.event = ev
  if (ev) applyEvent(state, ev)
  pushLog(state, 'sys', `▶️ Bắt đầu Round ${state.round} (thuế ${state.config.taxRates[state.round]}%).`)
}

// ---------- reducer ----------
export function gameReducer(prev: GameState, action: GameAction): GameState {
  const state = structuredClone(prev)

  switch (action.type) {
    case 'SET_PHASE': {
      state.phase = action.phase
      armTimer(state, action.phase)
      const first = firstAliveId(state)        // vào phase mới → bắt đầu lượt từ nhóm đầu
      if (first) state.activeTeamId = first
      return state
    }

    case 'SET_ACTIVE_TEAM': {
      const target = findTeam(state, action.teamId)
      if (!target || target.bankrupt) return prev   // không cho chọn nhóm đã phá sản
      state.activeTeamId = action.teamId
      // chọn nhóm = bắt đầu lượt của nhóm đó → đặt lại đồng hồ phase
      if (!state.gameOver) armTimer(state, state.phase)
      return state
    }

    case 'TOGGLE_PAUSE': {
      if (state.gameOver) return prev
      if (!state.paused) {
        if (state.phaseEndsAt == null) return prev      // không có gì để dừng
        state.pauseLeftMs = Math.max(0, state.phaseEndsAt - Date.now())
        state.paused = true
      } else {
        state.phaseEndsAt = Date.now() + (state.pauseLeftMs ?? 0)  // tiếp tục từ chỗ đóng băng
        state.pauseLeftMs = null
        state.paused = false
      }
      return state
    }

    case 'NEXT_TURN': {
      if (state.gameOver || state.paused || state.phaseEndsAt == null) return prev
      const order = state.teams.filter((t) => !t.bankrupt).map((t) => t.id)
      if (order.length === 0) return prev
      const idx = order.indexOf(state.activeTeamId)

      // còn nhóm phía sau trong cùng phase → sang nhóm kế
      if (idx >= 0 && idx < order.length - 1) {
        state.activeTeamId = order[idx + 1]
        armTimer(state, state.phase)
        return state
      }
      // nhóm cuối của phase → sang phase kế (bắt đầu lại từ nhóm đầu)
      if (state.phase < 3) {
        state.phase += 1
        state.activeTeamId = order[0]
        armTimer(state, state.phase)
        return state
      }
      // phase 3 + nhóm cuối → DỪNG đồng hồ, chờ quản trò bấm "Kết thúc Round"
      state.phaseEndsAt = null
      pushLog(state, 'sys', `⏳ Hết Phase 3 — bấm "Kết thúc Round ${state.round}" để sang round kế.`)
      return state
    }

    case 'ANSWER_QUIZ': {
      const team    = findTeam(state, action.teamId || state.activeTeamId)
      if (!team) return prev
      const counter = state.perRound[team.id]
      if (team.bankrupt || counter.quizDone) return prev
      const d      = diffById[action.difficulty]
      const reward = action.correct ? d.reward : d.failReward
      team.cash    = round1(team.cash + reward)
      counter.quizDone = true
      pushLog(state, 'quiz', `🎯 ${team.name} trả lời ${action.correct ? 'ĐÚNG' : 'SAI'} (${d.label}) → +${reward}B.`)
      return state
    }

    case 'BUY_SHARE': {
      const team    = findTeam(state, action.teamId || state.activeTeamId)
      if (!team) return prev
      const comp    = findCompany(state, action.companyId)
      const counter = state.perRound[team.id]
      if (team.bankrupt) return prev
      if (counter.transactions >= txLimit(counter)) return prev
      if (comp.sharesAvailable <= 0) return prev
      if (team.cash < comp.price) return prev
      team.cash  = round1(team.cash - comp.price)
      team.holdings[comp.id] = (team.holdings[comp.id] || 0) + 1
      comp.sharesAvailable -= 1
      counter.transactions += 1
      pushLog(state, 'trade', `🟢 ${team.name} mua 1 cp ${comp.name} (${comp.price}B).`)
      checkEarlyWin(state, team)
      return state
    }

    case 'SELL_SHARE': {
      const team    = findTeam(state, action.teamId || state.activeTeamId)
      if (!team) return prev
      const comp    = findCompany(state, action.companyId)
      const counter = state.perRound[team.id]
      if (team.bankrupt) return prev
      if (counter.transactions >= txLimit(counter)) return prev
      if (!team.holdings[comp.id]) return prev
      team.cash = round1(team.cash + comp.price)
      team.holdings[comp.id] -= 1
      if (team.holdings[comp.id] === 0) delete team.holdings[comp.id]
      comp.sharesAvailable = Math.min(state.config.totalShares, comp.sharesAvailable + 1)
      counter.transactions += 1
      pushLog(state, 'trade', `🔴 ${team.name} bán 1 cp ${comp.name} (+${comp.price}B).`)
      return state
    }

    case 'BUY_BUFF': {
      const team    = findTeam(state, action.teamId || state.activeTeamId)
      if (!team) return prev
      const counter = state.perRound[team.id]
      const buff    = buffById[action.buffId]
      if (team.bankrupt || counter.buffBought || !buff) return prev
      const price = buffPrice(state.round)
      if (team.cash < price) return prev
      team.cash = round1(team.cash - price)
      counter.buffBought = true
      team.buffs.push(buff.id)
      pushLog(state, 'buff', `🃏 ${team.name} mua buff "${buff.name}" (${price}B).`)

      if (buff.id === 'uncommon-extrabuy') {
        counter.extraBuys += 1
      } else if (buff.id === 'rare-taxfree') {
        team.taxFreeRounds = 2
      } else if (buff.id === 'epic-boost') {
        const bonus = round1(holdingsValue(team.holdings, state.companies) * 0.1)
        team.cash   = round1(team.cash + bonus)
        pushLog(state, 'buff', `🚀 ${team.name} +${bonus}B (10% giá trị cổ phần).`)
      } else if (buff.id === 'legendary-raid') {
        const victim = state.teams
          .filter((t) => t.id !== team.id && !t.bankrupt)
          .sort((a, b) => totalAssets(b, state.companies) - totalAssets(a, state.companies))[0]
        if (victim) {
          const steal = round1(Math.min(victim.cash, totalAssets(victim, state.companies) * 0.1))
          victim.cash = round1(victim.cash - steal)
          team.cash   = round1(team.cash + steal)
          pushLog(state, 'buff', `👑 ${team.name} thâu tóm ${steal}B từ ${victim.name}.`)
        }
      }
      return state
    }

    case 'PROPOSE_TRADE': {
      const f = findTeam(state, action.fromTeam)
      const t = findTeam(state, action.toTeam)
      if (!f || !t) return prev
      const counter = state.perRound[action.fromTeam]
      if (!counter || counter.tradeProposed) return prev
      state.trades.unshift({
        id: 'tr' + (state.logSeq + 1),
        fromTeam: action.fromTeam, toTeam: action.toTeam,
        give: action.give, receive: action.receive, status: 'pending',
      })
      counter.tradeProposed = true
      pushLog(state, 'trade', `🤝 ${f.name} gửi đề xuất trao đổi cho ${t.name}.`)
      return state
    }

    case 'RESOLVE_TRADE': {
      const trade = state.trades.find((t) => t.id === action.tradeId)
      if (!trade || trade.status !== 'pending') return prev
      // chỉ đội NHẬN đề xuất mới được phản hồi
      if (action.teamId && trade.toTeam !== action.teamId) return prev
      const from = findTeam(state, trade.fromTeam)
      const to   = findTeam(state, trade.toTeam)

      if (!action.accept) {
        trade.status = 'rejected'
        pushLog(state, 'trade', `✖ ${to.name} từ chối đề xuất của ${from.name}.`)
        return state
      }

      const canGive = (team, bundle) =>
        team.cash >= (bundle.cash || 0) &&
        Object.entries(bundle.shares || {}).every(([id, q]) => (team.holdings[id] || 0) >= q)

      if (!canGive(from, trade.give) || !canGive(to, trade.receive)) {
        trade.status = 'rejected'
        pushLog(state, 'trade', `✖ Giao dịch ${from.name}↔${to.name} thất bại: không đủ tài sản.`)
        return state
      }

      const move = (src: Team, dst: Team, bundle: TradeBundle) => {
        src.cash = round1(src.cash - (bundle.cash || 0))
        dst.cash = round1(dst.cash + (bundle.cash || 0))
        Object.entries(bundle.shares || {}).forEach(([id, q]) => {
          src.holdings[id] -= q
          if (src.holdings[id] === 0) delete src.holdings[id]
          dst.holdings[id] = (dst.holdings[id] || 0) + q
        })
      }
      move(from, to, trade.give)
      move(to, from, trade.receive)
      trade.status = 'accepted'
      pushLog(state, 'trade', `✔ ${to.name} đồng ý trao đổi với ${from.name}.`)
      checkEarlyWin(state, from)
      checkEarlyWin(state, to)
      return state
    }

    case 'END_ROUND': {
      if (state.gameOver) return prev
      endRound(state)
      return state
    }

    case 'RESET':
      return makeInitialState(prev.config?.numTeams ?? 4)

    default:
      return prev
  }
}
