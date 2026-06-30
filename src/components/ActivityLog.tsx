import { useGame } from '../state/GameContext'

export default function ActivityLog() {
  const { state } = useGame()
  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon">📰</span>
        <h2>Nhật ký ván đấu</h2>
        <span className="tag">{state.log.length} dòng</span>
      </div>
      <div className="log-list">
        {state.log.map((entry) => (
          <div key={entry.id} className={`log-row ${entry.kind}`}>
            {entry.text}
          </div>
        ))}
      </div>
    </section>
  )
}
