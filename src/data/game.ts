import type { GameConfig, GameEvent } from '../types'

export const phases = [
  { id: 1, name: 'Huy động vốn', short: 'Quiz',    icon: '🎯', time: '10s' },
  { id: 2, name: 'Đầu tư + Buff', short: 'Đầu tư', icon: '💰', time: '30s' },
  { id: 3, name: 'Đàm phán',     short: 'Đàm phán', icon: '🤝', time: '30s' },
]

export const events: Record<number, GameEvent> = {
  2: { title: 'Bùng nổ công nghệ',     type: 'good',    desc: 'Ngành Công nghệ tăng +30%.',         icon: '🚀', effect: { type: 'sector', companyId: 'tech',   pct: 30  } },
  4: { title: 'Khủng hoảng tài chính', type: 'bad',     desc: 'Toàn thị trường giảm -15%.',         icon: '📉', effect: { type: 'market',                   pct: -15 } },
  6: { title: 'Trợ cấp nhà nước',      type: 'neutral', desc: 'Mỗi tập đoàn nhận +3B tiền mặt.',   icon: '🎁', effect: { type: 'cash',   amount: 3                  } },
  8: { title: 'Sáp nhập Năng lượng',   type: 'good',    desc: 'Ngành Năng lượng tăng +25%.',        icon: '⚡', effect: { type: 'sector', companyId: 'energy', pct: 25 } },
  10:{ title: 'Bong bóng tài chính',   type: 'bad',     desc: 'Ngành Tài chính giảm -20%.',         icon: '💣', effect: { type: 'sector', companyId: 'finance',pct:-20 } },
  12:{ title: 'Cách mạng xanh',        type: 'good',    desc: 'Toàn thị trường tăng +10%.',         icon: '🌿', effect: { type: 'market',                   pct: 10  } },
}

// Hằng số gốc — dùng cho trang giới thiệu (homepage). Khớp với getGameConfig: 4 round, thuế 5%→20%.
export const TOTAL_ROUNDS    = 4
export const STARTING_CASH   = 10
export const EARLY_WIN_SHARES= 6
export const MAX_TRANSACTIONS= 2
export const taxRates = { 1: 5, 2: 10, 3: 15, 4: 20 }

/**
 * Suy ra thông số ván theo số nhóm (2–10).
 *
 *   totalRounds    = 4 (CỐ ĐỊNH cho mọi sĩ số)
 *   startingCash   = round(22 - n*1.2)                 → 2 nhóm=20 … 10 nhóm=10
 *   totalShares    = n * 3                              → 2 nhóm=6  … 10 nhóm=30
 *   earlyWinShares = ceil(totalShares * 0.60)           → ~60% thâu tóm
 *   maxTransactions= 2 (cố định)
 *   taxRates       = leo thang đều 5% → 20% trong 4 round → 5/10/15/20
 */
export function getGameConfig(numTeams = 4): GameConfig {
  const n = Math.max(2, Math.min(10, numTeams))

  // CỐ ĐỊNH 4 round cho mọi sĩ số — vì chơi ĐỒNG THỜI nên thời gian
  // KHÔNG nhân theo số người.
  const totalRounds     = 4
  const startingCash    = Math.round(22 - n * 1.2)
  const totalShares     = n * 3
  const earlyWinShares  = Math.ceil(totalShares * 0.6)
  const maxTransactions = 2

  // Thời lượng cho MỖI NHÓM trong từng phase (giây). Đồng hồ chạy lần lượt từng nhóm:
  // hết giờ nhóm này → nhóm kế; xong nhóm cuối → phase kế; hết phase 3 → kết thúc round.
  // Tổng ván ≈ (10 + 30 + 30) × số nhóm × 4 round.
  const phaseDurations  = { 1: 10, 2: 30, 3: 30 }

  // Thuế leo thang đều từ 5% → 20%
  const taxRatesScaled: Record<number, number> = {}
  for (let r = 1; r <= totalRounds; r++) {
    taxRatesScaled[r] = Math.round(5 + ((20 - 5) / (totalRounds - 1)) * (r - 1))
  }

  // Sự kiện ở các round chẵn trong phạm vi game
  const activeEvents = Object.fromEntries(
    Object.entries(events).filter(([r]) => Number(r) <= totalRounds)
  ) as Record<number, GameEvent>

  return {
    numTeams: n,
    totalRounds,
    startingCash,
    totalShares,
    earlyWinShares,
    maxTransactions,
    phaseDurations,
    taxRates: taxRatesScaled,
    events: activeEvents,
  }
}
