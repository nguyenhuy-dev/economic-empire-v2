import { MAX_TRANSACTIONS } from '../data/game'
import { fmt, priceChange } from '../utils/calc'
import { useGame } from '../state/GameContext'

export default function StockMarket() {
  const { state, dispatch, viewTeamId } = useGame()
  const active = state.teams.find((t) => t.id === viewTeamId)
  if (!active) return <section className="panel panel-pad"><p className="muted">Bạn chưa có đội.</p></section>
  const counter = state.perRound[viewTeamId]
  const txLimit = MAX_TRANSACTIONS + counter.extraBuys
  const txLeft = txLimit - counter.transactions
  const canTrade = state.phase === 2 && !active.bankrupt && !state.gameOver && txLeft > 0
  const totalShares = state.config?.totalShares ?? 10

  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon" />
        <h2>Thị Trường Cổ Phiếu</h2>
        <span className="tag">
          {state.phase === 2
            ? `${txLeft}/${txLimit} giao dịch còn lại`
            : 'Mở giao dịch ở Phase 2'}
        </span>
      </div>
      <div className="stock-grid">
        {state.companies.map((c) => (
          <CompanyCard
            key={c.id}
            company={c}
            totalShares={totalShares}
            owned={active.holdings[c.id] || 0}
            canBuy={canTrade && c.sharesAvailable > 0 && active.cash >= c.price}
            canSell={canTrade && (active.holdings[c.id] || 0) > 0}
            onBuy={() => dispatch({ type: 'BUY_SHARE', companyId: c.id })}
            onSell={() => dispatch({ type: 'SELL_SHARE', companyId: c.id })}
          />
        ))}
      </div>
    </section>
  )
}

function CompanyCard({ company, totalShares, owned, canBuy, canSell, onBuy, onSell }) {
  const change = priceChange(company)
  const dir = change > 0 ? 'up' : change < 0 ? 'down' : 'flat'
  const sign = change > 0 ? '+' : ''
  const sold = totalShares - company.sharesAvailable

  return (
    <div className="stock-card" style={{ '--sc': company.color }}>
      <div className="stock-card-top">
        <span className="stock-cat">{company.ticker}</span>
        <span className={`delta ${dir}`}>
          {sign}{change}%
        </span>
      </div>
      <div className="stock-body">
        <div className="stock-name">{company.name}</div>
        <div className="stock-price-row">
          <span className="p">{fmt(company.price)}</span>
          <span className="unit">B</span>
        </div>
        <div className="stock-sublabel">GIÁ / CỔ PHẦN</div>

        <div className="supply-squares">
          {Array.from({ length: totalShares }, (_, i) => {
            let cls = 'sq'
            if (i < sold - owned) cls += ' sold'
            else if (i < sold) cls += ' owned'
            return <span key={i} className={cls} />
          })}
        </div>
        <div className="stock-supply-label">
          {sold} / {totalShares} CP ĐANG LƯU HÀNH
          {owned > 0 && ` · BẠN GIỮ ${owned}`}
        </div>

        <div className="stock-actions">
          <button className="btn-buy" disabled={!canBuy} onClick={onBuy}>
            Mua
          </button>
          <button className="btn-sell" disabled={!canSell} onClick={onSell}>
            Bán
          </button>
        </div>
      </div>
    </div>
  )
}
