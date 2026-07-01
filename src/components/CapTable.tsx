import { useGame } from '../state/GameContext'

/**
 * Cơ cấu sở hữu cổ phần — cho biết đội nào đang giữ bao nhiêu cổ phần của từng công ty.
 * Mỗi công ty: 1 thanh xếp chồng theo màu đội + danh sách đội giữ cp + số cp còn trên sàn.
 */
export default function CapTable() {
  const { state } = useGame()
  const total = state.config?.totalShares ?? 8
  const threshold = state.config?.earlyWinShares ?? 5

  return (
    <section className="panel panel-pad">
      <div className="section-head">
        <span className="section-icon">🧾</span>
        <h2>Cơ cấu sở hữu cổ phần</h2>
        <span className="tag">Ai giữ cp nào</span>
      </div>

      <div className="stack" style={{ gap: 14 }}>
        {state.companies.map((c) => {
          const owners = state.teams
            .map((t) => ({ team: t, qty: t.holdings[c.id] || 0 }))
            .filter((o) => o.qty > 0)
            .sort((a, b) => b.qty - a.qty)
          const available = c.sharesAvailable
          const sold = total - available

          return (
            <div key={c.id}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: 6,
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 13, color: c.color }}>
                  {c.icon} {c.name}
                </span>
                <span
                  className="muted"
                  style={{ fontSize: 11, fontFamily: "'Space Mono', monospace" }}
                >
                  {sold}/{total} đã bán
                </span>
              </div>

              {/* Thanh xếp chồng: mỗi đoạn = 1 đội, phần xám = còn trên sàn */}
              <div
                style={{
                  display: 'flex',
                  height: 14,
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-2)',
                }}
              >
                {owners.map((o) => (
                  <div
                    key={o.team.id}
                    title={`${o.team.name}: ${o.qty} cp`}
                    style={{
                      width: `${(o.qty / total) * 100}%`,
                      background: o.team.color,
                    }}
                  />
                ))}
              </div>

              {/* Danh sách đội đang giữ cổ phần */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 10,
                  marginTop: 6,
                  fontSize: 11,
                }}
              >
                {owners.length === 0 ? (
                  <span className="muted">Chưa đội nào sở hữu</span>
                ) : (
                  owners.map((o) => (
                    <span
                      key={o.team.id}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 2,
                          background: o.team.color,
                          display: 'inline-block',
                        }}
                      />
                      {o.team.logo} {o.team.name.replace('Tập đoàn ', '')}: <strong>{o.qty}</strong> cp
                      {o.qty >= threshold && (
                        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>👑</span>
                      )}
                    </span>
                  ))
                )}
                <span className="muted" style={{ fontFamily: "'Space Mono', monospace" }}>
                  · còn {available} cp trên sàn
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
