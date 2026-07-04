import { buffs, buffShopOffer, tierMeta, buffPrice } from "../data/buffs";
import { fmt } from "../utils/calc";
import { useGame } from "../state/GameContext";

export default function BuffShop() {
  const { state, dispatch, viewTeamId } = useGame();
  const active = state.teams.find((t) => t.id === viewTeamId);
  const offered = buffShopOffer.map((id) => buffs.find((b) => b.id === id));
  if (!active)
    return (
      <section className="panel panel-pad">
        <p className="muted">Bạn chưa có đội.</p>
      </section>
    );
  const counter = state.perRound[viewTeamId];
  // giá theo round + thẻ đỏ (legendary) đắt hơn
  const priceOther = buffPrice(state.round, false);
  const priceRed = buffPrice(state.round, true);

  const blockedBase = counter.buffBought || active.bankrupt || state.gameOver;

  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon">🃏</span>
        <h2>Buff Shop · Thẻ quyền lực</h2>
        <span className="tag">
          {counter.buffBought
            ? `${active.logo} đã mua buff`
            : `3 gói · ${fmt(priceOther)}–${fmt(priceRed)}/gói (round ${state.round}) · ${active.logo}`}
        </span>
      </div>
      <div className="buff-grid">
        {offered.map((b) => {
          const price = buffPrice(state.round, b.tier === "legendary");
          return (
            <BuffCard
              key={b.id}
              buff={b}
              price={price}
              disabled={blockedBase || active.cash < price}
              onBuy={() => dispatch({ type: "BUY_BUFF", buffId: b.id })}
            />
          );
        })}
      </div>
    </section>
  );
}

function BuffCard({ buff, disabled, onBuy, price }) {
  const t = tierMeta[buff.tier];
  return (
    <div className="buff-card" style={{ "--bc": t.color, "--bg-glow": t.glow }}>
      <div className="buff-tier">{t.label}</div>
      <div className="buff-icon">{buff.icon}</div>
      <div className="buff-name">{buff.name}</div>
      <div className="buff-effect">{buff.effect}</div>
      <button className="buff-buy" disabled={disabled} onClick={onBuy}>
        Mua · {fmt(price)}
      </button>
    </div>
  );
}
