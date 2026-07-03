import { useState, useEffect, useMemo } from 'react'
import { difficulties, quizQuestions } from '../data/quiz'
import { fmt } from '../utils/calc'
import { useGame } from '../state/GameContext'

export default function QuizPanel() {
  const { state, dispatch, viewTeamId } = useGame()
  const active = state.teams.find((t) => t.id === viewTeamId)
  const [diff, setDiff] = useState('medium')
  const [picked, setPicked] = useState(null)
  const [revealed, setRevealed] = useState(false) // câu hỏi chỉ hiện khi quản trò công bố

  // đổi team / sang round mới -> ẩn câu hỏi & reset lựa chọn
  useEffect(() => {
    setPicked(null)
    setRevealed(false)
  }, [viewTeamId, state.round])

  if (!active) return <section className="panel panel-pad"><p className="muted">Bạn chưa có đội.</p></section>
  const counter = state.perRound[viewTeamId]
  const locked = counter.quizDone || active.bankrupt || state.gameOver

  const meta = difficulties.find((d) => d.id === diff)
  const randomIdx = useMemo(() => Math.floor(Math.random() * 4), [diff, viewTeamId, state.round])
  const question = quizQuestions[diff][randomIdx]
  const failReward = meta.failReward

  function pick(i) {
    if (locked || picked !== null) return
    setPicked(i)
    dispatch({
      type: 'ANSWER_QUIZ',
      difficulty: diff,
      correct: i === question.answer,
    })
  }

  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon">🎯</span>
        <h2>Phase 1 · Huy động vốn (Quiz)</h2>
        <span className="tag">
          {locked ? `${active.logo} đã trả lời` : `Đội ${active.logo}`}
        </span>
      </div>

      <div className="diff-row">
        {difficulties.map((d) => (
          <button
            key={d.id}
            className={`diff-btn ${diff === d.id ? 'active' : ''}`}
            style={{ '--dc': d.color }}
            disabled={locked || picked !== null || revealed}
            onClick={() => setDiff(d.id)}
          >
            <div className="dl">{d.label}</div>
            <div className="dr">Đúng +{fmt(d.reward)}</div>
          </button>
        ))}
      </div>

      {/* Chưa công bố: ẩn câu hỏi, chờ quản trò bấm nút */}
      {!locked && !revealed && (
        <div style={{ marginTop: 14 }}>
          <p className="quiz-note" style={{ marginBottom: 12 }}>
            Chọn độ khó rồi bấm nút để công bố câu hỏi cho đội {active.logo}.
          </p>
          <button
            className="btn-primary block"
            onClick={() => setRevealed(true)}
          >
            🎬 Hiện câu hỏi · {meta.label}
          </button>
        </div>
      )}

      {/* Đã công bố: hiện câu hỏi + đáp án */}
      {revealed && (
        <>
          <div className="quiz-q">{question.q}</div>
          <div className="quiz-opts">
            {question.options.map((opt, i) => {
              let cls = ''
              if (picked !== null) {
                if (i === question.answer) cls = 'correct'
                else if (i === picked) cls = 'wrong'
              }
              return (
                <button
                  key={i}
                  className={`quiz-opt ${cls}`}
                  disabled={locked || picked !== null}
                  onClick={() => pick(i)}
                >
                  <span className="key">{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              )
            })}
          </div>
        </>
      )}

      {locked ? (
        <p className="quiz-note">
          ✔ {active.name} đã huy động vốn round này. Chọn tập đoàn khác ở thanh điều khiển.
        </p>
      ) : (
        <div className="quiz-reward">
          <div className="reward-pill ok">
            <div className="rv">+{fmt(meta.reward)}</div>
            <div className="rl">Trả lời đúng</div>
          </div>
          <div className="reward-pill no">
            <div className="rv">+{fmt(failReward)}</div>
            <div className="rl">Trả lời sai</div>
          </div>
        </div>
      )}
    </section>
  )
}
