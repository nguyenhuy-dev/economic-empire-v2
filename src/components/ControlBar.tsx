import { useGame } from '../state/GameContext'
import { fmt, fmtTime, totalAssets } from '../utils/calc'
import { MAX_TRANSACTIONS } from '../data/game'

export default function ControlBar({ onSetup }: { onSetup?: () => void }) {
  const { state, dispatch, viewTeamId, secondsLeft } = useGame()

  const phaseName = ['', 'Huy động vốn', 'Đầu tư + Buff', 'Đàm phán'][state.phase] || ''

  // Đồng hồ chạy lần lượt từng nhóm trong phase → hiển thị "lượt thứ mấy / tổng số nhóm".
  const aliveOrder = state.teams.filter((t) => !t.bankrupt)
  const turnNo = aliveOrder.findIndex((t) => t.id === viewTeamId) + 1

  function newGame() {
    if (!window.confirm('Chơi lại ván mới với cùng số nhóm? Ván hiện tại sẽ mất.')) return
    dispatch({ type: 'RESET' })
  }
  function changeSetup() {
    if (!window.confirm('Về màn hình chọn số nhóm? Ván hiện tại sẽ mất.')) return
    onSetup?.()
  }

  return (
    <div className="control-bar panel">
      {/* Trạng thái ván + đồng hồ đếm ngược */}
      <div className="cb-section">
        <span className="cb-label">Round {state.round}/{state.config?.totalRounds ?? 4}</span>
        <span className="cb-label" style={{ color: 'var(--gold)' }}>Phase {state.phase} · {phaseName}</span>
        {secondsLeft != null && (
          <span
            className="cb-timer"
            style={{
              fontFamily: "'Space Mono', monospace", fontSize: 22, fontWeight: 700,
              color: state.paused ? 'var(--gold)' : secondsLeft <= 10 ? 'var(--red)' : 'var(--text)',
              minWidth: 72, textAlign: 'center',
            }}
          >
            {state.paused ? '⏸' : '⏱'} {fmtTime(secondsLeft)}
          </span>
        )}
        {secondsLeft != null && !state.gameOver && (
          <button
            className="btn-ghost"
            style={state.paused ? { color: '#000', background: 'var(--gold)' } : undefined}
            onClick={() => dispatch({ type: 'TOGGLE_PAUSE' })}
          >
            {state.paused ? '▶ Tiếp tục' : '⏸ Dừng giờ'}
          </button>
        )}
        {secondsLeft == null && !state.gameOver && (
          <span className="cb-label" style={{ color: 'var(--gold)' }}>
            ⏳ Hết Phase 3 · bấm “Kết thúc Round”
          </span>
        )}
      </div>

      {/* Quản trò chọn nhóm để thao tác — đồng hồ chạy lần lượt từng nhóm */}
      <div className="cb-section">
        <span className="cb-label">Lượt của · nhóm {turnNo}/{aliveOrder.length}</span>
        <div className="cb-teams">
          {state.teams.map((t) => (
            <button
              key={t.id}
              className={`cb-team ${t.id === viewTeamId ? 'on' : ''} ${t.bankrupt ? 'dead' : ''}`}
              style={{ '--tc': t.color }}
              disabled={t.bankrupt}
              onClick={() => dispatch({ type: 'SET_ACTIVE_TEAM', teamId: t.id })}
            >
              {t.logo} {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Số liệu nhóm đang thao tác */}
      <TeamStats state={state} teamId={viewTeamId} />

      {/* Hành động của quản trò */}
      <div className="cb-actions">
        <button className="btn-ghost" onClick={changeSetup}>⚙ Đổi số nhóm</button>
        <button className="btn-ghost" onClick={newGame}>↺ Ván mới</button>
        <button
          className="btn-primary"
          disabled={state.gameOver}
          onClick={() => dispatch({ type: 'END_ROUND' })}
        >
          Kết thúc Round {state.round} →
        </button>
      </div>
    </div>
  )
}

function TeamStats({ state, teamId }) {
  const team = state.teams.find((t) => t.id === teamId)
  if (!team) return null
  const counter = state.perRound[teamId]
  const txLimit = MAX_TRANSACTIONS + counter.extraBuys

  return (
    <div className="cb-section cb-status">
      <div className="cb-stat" style={{ borderLeft: `3px solid ${team.color}`, paddingLeft: 8 }}>
        <div className="v">{team.logo}</div>
        <div className="l">{team.name}</div>
      </div>
      <Stat label="Tiền mặt" value={fmt(team.cash)} />
      <Stat label="Tài sản" value={fmt(totalAssets(team, state.companies))} accent />
      <Stat label="Giao dịch" value={`${counter.transactions}/${txLimit}`} warn={counter.transactions >= txLimit} />
      <Stat label="Quiz" value={counter.quizDone ? '✔' : '—'} />
      <Stat label="Buff" value={counter.buffBought ? '✔' : '—'} />
    </div>
  )
}

function Stat({ label, value, accent, warn }: { label: string; value: string; accent?: boolean; warn?: boolean }) {
  return (
    <div className={`cb-stat ${accent ? 'accent' : ''} ${warn ? 'warn' : ''}`}>
      <div className="v">{value}</div>
      <div className="l">{label}</div>
    </div>
  )
}
