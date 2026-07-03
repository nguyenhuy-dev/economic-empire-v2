// Buff / Thẻ quyền lực — 4 tier. Giá gói TĂNG DẦN nhưng CHẬM DẦN theo round:
// mức cộng mỗi round giảm dần (bắt đầu +2, các round sau chỉ +1, tối thiểu +1).
// Thẻ ĐỎ (legendary) luôn đắt hơn 1B so với các thẻ khác.
export const BUFF_BASE_RED = 3 // thẻ đỏ (legendary) — giá round 1
export const BUFF_BASE_OTHER = 2 // các thẻ khác — giá round 1
export const BUFF_PRICE_STEP = 2 // mức tăng ban đầu (round 2), rồi giảm dần
export function buffPrice(round: number, isRed = false): number {
  let price = isRed ? BUFF_BASE_RED : BUFF_BASE_OTHER
  for (let r = 2; r <= round; r++) {
    price += Math.max(1, BUFF_PRICE_STEP - (r - 2)) // r2:+2, r3:+1, r4:+1, ...
  }
  return price
}

export const tierMeta = {
  uncommon: { label: 'Uncommon', color: '#34d399', glow: 'rgba(52,211,153,.20)' },
  rare: { label: 'Rare', color: '#c084fc', glow: 'rgba(192,132,252,.20)' },
  epic: { label: 'Epic', color: '#fbbf24', glow: 'rgba(251,191,36,.22)' },
  legendary: { label: 'Legendary', color: '#fb7185', glow: 'rgba(251,113,133,.24)' },
}

export const buffs = [
  {
    id: 'uncommon-extrabuy',
    tier: 'uncommon',
    name: 'Mở rộng giao dịch',
    effect: 'Được mua thêm 1 cổ phần trong round này',
    icon: '🛒',
  },
  {
    id: 'rare-taxfree',
    tier: 'rare',
    name: 'Miễn thuế',
    effect: 'Miễn thuế trong 2 round',
    icon: '🧾',
  },
  {
    id: 'epic-boost',
    tier: 'epic',
    name: 'Thổi giá',
    effect: 'Tăng 10% giá trị cổ phần đang nắm giữ',
    icon: '🚀',
  },
  {
    id: 'legendary-raid',
    tier: 'legendary',
    name: 'Thâu tóm',
    effect: 'Chiếm 10% tổng tài sản của 1 team khác',
    icon: '👑',
  },
]

// 3 gói ngẫu nhiên đang bày bán trong round hiện tại
export const buffShopOffer = ['uncommon-extrabuy', 'epic-boost', 'legendary-raid']
