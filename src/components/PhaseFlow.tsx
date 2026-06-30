import { phases } from '../data/game'
import { useGame } from '../state/GameContext'
import { fmtTime } from '../utils/calc'

export default function PhaseFlow() {
  const { state, dispatch, secondsLeft } = useGame()
  const activePhase = state.phase

  return (
    <div className="flow">
      {phases.map((p, i) => (
        <PhaseStep
          key={p.id}
          phase={p}
          state={
            p.id === activePhase ? 'active' : p.id < activePhase ? 'done' : 'todo'
          }
          countdown={p.id === activePhase ? secondsLeft : null}
          showArrow={i < phases.length - 1}
          // Quản trò bấm để nhảy sang phase bất kỳ (đồng hồ đặt lại theo phase đó).
          onClick={() => dispatch({ type: 'SET_PHASE', phase: p.id })}
        />
      ))}
    </div>
  )
}

function PhaseStep({ phase, state, countdown, showArrow, onClick }) {
  const timeLabel = countdown != null ? `⏱ ${fmtTime(countdown)}` : `Dự kiến ${phase.time}`
  return (
    <>
      <button
        className={`flow-step ${state}`}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        <span className="num">{phase.icon}</span>
        <span>
          <div className="nm">
            Phase {phase.id} · {phase.name}
          </div>
          <div className="tm">{timeLabel}</div>
        </span>
      </button>
      {showArrow && <span className="flow-arrow">→</span>}
    </>
  )
}
