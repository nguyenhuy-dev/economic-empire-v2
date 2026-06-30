import { useState } from 'react'
import { GameProvider, useGame } from './state/GameContext'
import HomePage from './components/HomePage'
import SetupPage from './pages/SetupPage'
import Header from './components/Header'
import ControlBar from './components/ControlBar'
import PhaseFlow from './components/PhaseFlow'
import EventBanner from './components/EventBanner'
import QuizPanel from './components/QuizPanel'
import BuffShop from './components/BuffShop'
import NegotiationPanel from './components/NegotiationPanel'
import StockMarket from './components/StockMarket'
import Scoreboard from './components/Scoreboard'
import ActivityLog from './components/ActivityLog'
import GameOverModal from './components/GameOverModal'
import { tierMeta } from './data/buffs'

type View = 'home' | 'setup' | 'game'

export default function App() {
  const [view, setView] = useState<View>('home')
  const [numTeams, setNumTeams] = useState(4)

  if (view === 'home') return <HomePage onStart={() => setView('setup')} />

  if (view === 'setup') {
    return (
      <SetupPage
        onBack={() => setView('home')}
        onStart={(n) => {
          setNumTeams(n)
          setView('game')
        }}
      />
    )
  }

  // Mỗi lần vào ván, GameProvider được mount lại → state khởi tạo mới cho `numTeams`.
  return (
    <GameProvider numTeams={numTeams}>
      <Board onHome={() => setView('home')} onSetup={() => setView('setup')} />
    </GameProvider>
  )
}

function Board({ onHome, onSetup }: { onHome: () => void; onSetup: () => void }) {
  const { state } = useGame()
  return (
    <div className="app">
      <Header onHome={onHome} />
      <ControlBar onSetup={onSetup} />
      {state.event && <EventBanner event={state.event} />}
      <PhaseFlow />
      <div className="grid grid-main">
        <div className="stack">
          {state.phase === 1 && <QuizPanel />}
          {state.phase === 2 && <BuffShop />}
          {state.phase === 3 && <NegotiationPanel />}
          <StockMarket />
        </div>
        <div className="stack">
          <Scoreboard />
          <ActivityLog />
          <TierLegend />
        </div>
      </div>
      <GameOverModal />
    </div>
  )
}

function TierLegend() {
  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon" />
        <h2>Cấp độ Buff (Tier)</h2>
      </div>
      <div className="legend">
        {Object.values(tierMeta).map((t) => (
          <span key={t.label}>
            <span className="dot" style={{ background: t.color }} />
            {t.label}
          </span>
        ))}
      </div>
      <p className="muted" style={{ fontSize: 12, marginTop: 12, lineHeight: 1.6 }}>
        Uncommon → Rare → Epic → Legendary. Legendary mạnh nhất và rất hiếm.
        Buff áp dụng ngay khi mua.
      </p>
    </section>
  )
}
