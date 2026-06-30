import { buffs, buffShopOffer, tierMeta, BUFF_PRICE } from '../data/buffs'
import { fmt } from '../utils/calc'
import { useGame } from '../state/GameContext'

export default function BuffShop() {
  const { state, dispatch, viewTeamId } = useGame()
  const active = state.teams.find((t) => t.id === viewTeamId)
  const offered = buffShopOffer.map((id) => buffs.find((b) => b.id === id))
  if (!active) return <section className="panel panel-pad"><p className="muted">Bạn chưa có đội.</p></section>
  const counter = state.perRound[viewTeamId]

  const blocked =
    counter.buffBought || active.bankrupt || state.gameOver || active.cash < BUFF_PRICE

  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon">🃏</span>
        <h2>Buff Shop · Thẻ quyền lực</h2>
        <span className="tag">
          {counter.buffBought
            ? `${active.logo} đã mua buff`
            : `3 gói · ${fmt(BUFF_PRICE)}/gói · ${active.logo}`}
        </span>
      </div>
      <div className="buff-grid">
        {offered.map((b) => (
          <BuffCard
            key={b.id}
            buff={b}
            disabled={blocked}
            onBuy={() => dispatch({ type: 'BUY_BUFF', buffId: b.id })}
          />
        ))}
      </div>
    </section>
  )
}

function BuffCard({ buff, disabled, onBuy }) {
  const t = tierMeta[buff.tier]
  return (
    <div className="buff-card" style={{ '--bc': t.color, '--bg-glow': t.glow }}>
      <div className="buff-tier">{t.label}</div>
      <div className="buff-icon">{buff.icon}</div>
      <div className="buff-name">{buff.name}</div>
      <div className="buff-effect">{buff.effect}</div>
      <button className="buff-buy" disabled={disabled} onClick={onBuy}>
        Mua · {fmt(BUFF_PRICE)}
      </button>
    </div>
  )
}
