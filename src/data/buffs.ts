// Buff / Thẻ quyền lực — 4 tier. Giá gói TĂNG DẦN theo round.
export const BUFF_BASE_PRICE = 3 // giá ở round 1
export const BUFF_PRICE_STEP = 2 // mỗi round tăng thêm
export function buffPrice(round: number): number {
  return BUFF_BASE_PRICE + Math.max(0, round - 1) * BUFF_PRICE_STEP
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
