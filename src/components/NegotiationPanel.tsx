import { useState, useEffect } from 'react'
import { fmt } from '../utils/calc'
import { useGame } from '../state/GameContext'
import type { TradeBundle, Company } from '../types'

function describe(bundle: TradeBundle, companyById: Record<string, Company>) {
  const parts = Object.entries(bundle.shares || {})
    .filter(([, q]) => q > 0)
    .map(([id, qty]) => `${qty} cp ${companyById[id]?.name}`)
  if (bundle.cash) parts.push(fmt(bundle.cash))
  return parts.length ? parts.join(' + ') : '—'
}

const statusMeta = {
  pending: { label: 'Chờ phản hồi', icon: '⏳' },
  accepted: { label: 'Đã đồng ý', icon: '✔' },
  rejected: { label: 'Từ chối', icon: '✖' },
}

export default function NegotiationPanel() {
  const { state, dispatch, viewTeamId } = useGame()
  const companyById = Object.fromEntries(state.companies.map((c) => [c.id, c]))
  const teamById = Object.fromEntries(state.teams.map((t) => [t.id, t]))

  const active = state.teams.find((t) => t.id === viewTeamId)
  if (!active) return <section className="panel panel-pad"><p className="muted">Bạn chưa có đội.</p></section>
  const counter = state.perRound[viewTeamId]
  const others = state.teams.filter((t) => t.id !== active.id && !t.bankrupt)

  const inbox = state.trades.filter(
    (tr) => tr.toTeam === active.id && tr.status === 'pending',
  )

  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon">🤝</span>
        <h2>Phase 3 · Đàm phán</h2>
        <span className="tag">1 đề xuất/team mỗi round</span>
      </div>

      {/* Hộp thư đến: đề xuất cần active team phản hồi */}
      {inbox.length > 0 && (
        <div className="inbox">
          <div className="inbox-title">📥 Đề xuất gửi tới {active.name}</div>
          {inbox.map((tr) => (
            <div key={tr.id} className="trade-card">
              <div className="trade-head">
                <span style={{ color: teamById[tr.fromTeam].color }}>
                  {teamById[tr.fromTeam].logo} {teamById[tr.fromTeam].name}
                </span>
                <span className="arrow">muốn đổi</span>
              </div>
              <div className="trade-body">
                <div className="trade-side">
                  <div className="lbl">Họ đưa bạn</div>
                  {describe(tr.give, companyById)}
                </div>
                <div className="trade-swap">⇄</div>
                <div className="trade-side">
                  <div className="lbl">Bạn đưa lại</div>
                  {describe(tr.receive, companyById)}
                </div>
              </div>
              <div className="inbox-actions">
                <button
                  className="btn-buy"
                  onClick={() =>
                    dispatch({ type: 'RESOLVE_TRADE', tradeId: tr.id, accept: true })
                  }
                >
                  ✔ Đồng ý
                </button>
                <button
                  className="btn-sell"
                  onClick={() =>
                    dispatch({ type: 'RESOLVE_TRADE', tradeId: tr.id, accept: false })
                  }
                >
                  ✖ Từ chối
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form tạo đề xuất */}
      {!counter.tradeProposed && others.length > 0 && state.phase === 3 ? (
        <ProposeForm
          active={active}
          others={others}
          companies={state.companies}
          teamById={teamById}
          onPropose={(payload) => dispatch({ type: 'PROPOSE_TRADE', ...payload })}
        />
      ) : (
        <p className="quiz-note">
          {state.phase !== 3
            ? 'Đàm phán mở ở Phase 3.'
            : counter.tradeProposed
              ? `✔ ${active.name} đã gửi đề xuất round này.`
              : 'Không có đối tác khả dụng.'}
        </p>
      )}

      {/* Lịch sử đề xuất */}
      {state.trades.length > 0 && (
        <div className="trade-history">
          <div className="inbox-title">📜 Lịch sử đề xuất</div>
          {state.trades.map((tr) => {
            const st = statusMeta[tr.status]
            return (
              <div key={tr.id} className="trade-mini">
                <span style={{ color: teamById[tr.fromTeam].color }}>
                  {teamById[tr.fromTeam].logo}
                </span>
                <span className="arrow">→</span>
                <span style={{ color: teamById[tr.toTeam].color }}>
                  {teamById[tr.toTeam].logo}
                </span>
                <span className="tm-detail">
                  {describe(tr.give, companyById)} ⇄ {describe(tr.receive, companyById)}
                </span>
                <span className={`trade-status ${tr.status}`}>
                  {st.icon} {st.label}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

function ProposeForm({ active, others, companies, teamById, onPropose }: any) {
  const [toTeam, setToTeam] = useState(others[0].id)
  const [giveId, setGiveId] = useState('')
  const [giveCash, setGiveCash] = useState<string | number>(0)
  const [recvId, setRecvId] = useState('')
  const [recvCash, setRecvCash] = useState<string | number>(0)

  const target = teamById[toTeam] ?? others[0]
  const myShares = companies.filter((c) => (active.holdings[c.id] || 0) > 0)
  const theirShares = companies.filter((c) => (target.holdings[c.id] || 0) > 0)

  // đảm bảo toTeam luôn hợp lệ khi danh sách đổi
  useEffect(() => {
    if (others.length && !others.find((t) => t.id === toTeam)) setToTeam(others[0].id)
  }, [others, toTeam])

  const valid =
    (giveId || Number(giveCash) > 0) &&
    (recvId || Number(recvCash) > 0) &&
    Number(giveCash) <= active.cash

  function submit() {
    if (!valid) return
    onPropose({
      fromTeam: active.id,
      toTeam,
      give: { shares: giveId ? { [giveId]: 1 } : {}, cash: Number(giveCash) || 0 },
      receive: { shares: recvId ? { [recvId]: 1 } : {}, cash: Number(recvCash) || 0 },
    })
    setGiveId('')
    setGiveCash(0)
    setRecvId('')
    setRecvCash(0)
  }

  return (
    <div className="propose">
      <div className="propose-row">
        <label>Gửi tới</label>
        <select value={toTeam} onChange={(e) => setToTeam(e.target.value)}>
          {others.map((t) => (
            <option key={t.id} value={t.id}>
              {t.logo} {t.name}
            </option>
          ))}
        </select>
      </div>

      <div className="propose-grid">
        <div className="propose-col">
          <div className="propose-col-h">{active.logo} {active.name} đưa</div>
          <select value={giveId} onChange={(e) => setGiveId(e.target.value)}>
            <option value="">— Không cổ phần —</option>
            {myShares.map((c) => (
              <option key={c.id} value={c.id}>
                1 cp {c.name} (đang giữ {active.holdings[c.id]})
              </option>
            ))}
          </select>
          <div className="cash-input">
            <span>+ tiền</span>
            <input
              type="number"
              min="0"
              max={active.cash}
              value={giveCash}
              onChange={(e) => setGiveCash(e.target.value)}
            />
            <span>B</span>
          </div>
        </div>

        <div className="propose-swap">⇄</div>

        <div className="propose-col">
          <div className="propose-col-h">{target.logo} {target.name} đưa lại</div>
          <select value={recvId} onChange={(e) => setRecvId(e.target.value)}>
            <option value="">— Không cổ phần —</option>
            {theirShares.map((c) => (
              <option key={c.id} value={c.id}>
                1 cp {c.name} (họ giữ {target.holdings[c.id]})
              </option>
            ))}
          </select>
          <div className="cash-input">
            <span>+ tiền</span>
            <input
              type="number"
              min="0"
              value={recvCash}
              onChange={(e) => setRecvCash(e.target.value)}
            />
            <span>B</span>
          </div>
        </div>
      </div>

      <button className="btn-primary block" disabled={!valid} onClick={submit}>
        Gửi đề xuất trao đổi
      </button>
    </div>
  )
}
