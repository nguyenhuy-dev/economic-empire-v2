import {
  fmt,
  totalAssets,
  holdingsValue,
  totalShares,
  monopolies,
} from '../utils/calc'

export default function TeamCard({
  team,
  rank,
  isLead,
  isActive,
  companies,
  totalSharesPerCompany = 10,
  onSelect,
  disabled = false,
}) {
  const total = totalAssets(team, companies)
  const stockVal = holdingsValue(team.holdings, companies)
  const mono = monopolies(team.holdings, companies, totalSharesPerCompany)

  return (
    <button
      className={`team-card ${isLead ? 'lead' : ''} ${isActive ? 'active' : ''} ${
        team.bankrupt ? 'dead' : ''
      }`}
      style={{ '--tc': team.color }}
      onClick={onSelect}
      disabled={disabled}
    >
      <div className="rank">#{rank}</div>
      <div className="team-logo">{team.logo}</div>
      <div className="team-info">
        <div className="nm">
          {team.name}
          {mono.length > 0 && <span className="chip mono">Độc quyền</span>}
          {team.bankrupt && <span className="chip bankrupt">Phá sản</span>}
          {isActive && !team.bankrupt && <span className="chip turn">Đang chơi</span>}
        </div>
        <div className="meta">
          {totalShares(team.holdings)} cổ phần
          {mono.length > 0 && ` · ${mono.join(', ')}`}
        </div>
      </div>
      <div className="team-assets">
        <div className="total">{fmt(total)}</div>
        <div className="split">
          💵 {fmt(team.cash)} · 📊 {fmt(stockVal)}
        </div>
      </div>
    </button>
  )
}
