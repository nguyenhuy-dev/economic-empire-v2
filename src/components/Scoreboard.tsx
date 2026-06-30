import TeamCard from './TeamCard'
import { totalAssets } from '../utils/calc'
import { useGame } from '../state/GameContext'

export default function Scoreboard() {
  const { state, dispatch, isHost, viewTeamId } = useGame()
  const ranked = [...state.teams].sort(
    (a, b) => totalAssets(b, state.companies) - totalAssets(a, state.companies),
  )

  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon">🏆</span>
        <h2>Bảng xếp hạng tài sản</h2>
        <span className="tag">{isHost ? 'Bấm để xem đội' : 'Đội của bạn được tô sáng'}</span>
      </div>
      <div className="team-list">
        {ranked.map((team, i) => (
          <TeamCard
            key={team.id}
            team={team}
            rank={i + 1}
            isLead={i === 0 && !team.bankrupt}
            isActive={team.id === viewTeamId}
            companies={state.companies}
            totalSharesPerCompany={state.config?.totalShares ?? 10}
            disabled={team.bankrupt}
            onSelect={() =>
              !team.bankrupt && dispatch({ type: 'SET_ACTIVE_TEAM', teamId: team.id })
            }
          />
        ))}
      </div>
    </section>
  )
}
