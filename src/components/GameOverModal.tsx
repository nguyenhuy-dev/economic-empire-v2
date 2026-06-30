import { useGame } from '../state/GameContext'
import { fmt, totalAssets, totalShares } from '../utils/calc'

export default function GameOverModal() {
  const { state, dispatch } = useGame()
  if (!state.gameOver) return null

  const ranked = [...state.teams].sort(
    (a, b) => totalAssets(b, state.companies) - totalAssets(a, state.companies),
  )
  const winner = state.teams.find((t) => t.id === state.winner)

  return (
    <div className="modal-overlay">
      <div className="modal panel">
        <div className="modal-crown">👑</div>
        <h2 className="modal-title">Kết thúc ván đấu</h2>
        {winner && (
          <div className="modal-winner" style={{ color: winner.color }}>
            {winner.logo} {winner.name} chiến thắng!
          </div>
        )}
        <p className="modal-reason">{state.winReason}</p>

        <div className="modal-rank">
          {ranked.map((t, i) => (
            <div key={t.id} className={`modal-rank-row ${i === 0 ? 'first' : ''}`}>
              <span className="mr-pos">#{i + 1}</span>
              <span className="mr-logo">{t.logo}</span>
              <span className="mr-name">
                {t.name}
                {t.bankrupt && <span className="chip bankrupt">Phá sản</span>}
              </span>
              <span className="mr-assets">
                {fmt(totalAssets(t, state.companies))}
                <small> · {totalShares(t.holdings)} cp</small>
              </span>
            </div>
          ))}
        </div>

        <button
          className="btn-primary block"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          ↺ Chơi lại
        </button>
      </div>
    </div>
  )
}
