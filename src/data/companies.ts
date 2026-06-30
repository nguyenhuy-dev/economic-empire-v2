// 4 công ty niêm yết — mỗi công ty có 10 cổ phần
export const TOTAL_SHARES = 10

export const companies = [
  {
    id: 'tech',
    name: 'Công nghệ',
    ticker: 'TECH',
    icon: '💻',
    color: '#3b82f6',
    price: 12, // B
    prevPrice: 11,
    sharesAvailable: 3, // còn lại trên thị trường
  },
  {
    id: 'bank',
    name: 'Ngân hàng',
    ticker: 'BANK',
    icon: '🏦',
    color: '#22c55e',
    price: 9,
    prevPrice: 10,
    sharesAvailable: 2,
  },
  {
    id: 'energy',
    name: 'Năng lượng',
    ticker: 'NRG',
    icon: '⚡',
    color: '#f59e0b',
    price: 15,
    prevPrice: 13,
    sharesAvailable: 4,
  },
  {
    id: 'finance',
    name: 'Tài chính',
    ticker: 'FIN',
    icon: '📈',
    color: '#a855f7',
    price: 8,
    prevPrice: 8,
    sharesAvailable: 1,
  },
]
