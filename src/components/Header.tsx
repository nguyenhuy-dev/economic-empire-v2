import { useGame } from '../state/GameContext'
import { priceChange } from '../utils/calc'

function Ticker({ companies }) {
  const items = companies.map((c) => {
    const change = priceChange(c)
    const dir = change > 0 ? 'up' : change < 0 ? 'down' : 'flat'
    const sign = change > 0 ? '+' : ''
    return { name: c.name.toUpperCase(), val: `${sign}${change}%`, dir }
  })
  const doubled = [...items, ...items]

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="t-name">{item.name}</span>
            <span className={`t-val ${item.dir}`}>{item.val}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Header({ onHome }) {
  const { state } = useGame()
  const { round } = state
  const totalRounds = state.config?.totalRounds ?? 4
  const taxRate = state.config?.taxRates?.[round] ?? 0

  return (
    <>
      <Ticker companies={state.companies} />
      <header className="header-bar">
        <div className="header-logo" onClick={onHome} style={{ cursor: 'pointer' }}>
          <div className="crest" />
          <h1>Đế Chế Kinh Tế</h1>
        </div>
        <nav className="header-nav">
          <a>Thị Trường</a>
          <a>Luật Chơi</a>
          <a>Thẻ Quyền Lực</a>
          <a>Sự Kiện</a>
        </nav>
        <div className="header-stats">
          <div className="hstat round">
            <div className="l">Round</div>
            <div className="v">{round}/{totalRounds}</div>
          </div>
          <div className="hstat tax">
            <div className="l">Thuế</div>
            <div className="v">{taxRate}%</div>
          </div>
          <div className="hstat">
            <div className="l">Nhóm</div>
            <div className="v">{state.teams.length}</div>
          </div>
        </div>
      </header>
    </>
  )
}
