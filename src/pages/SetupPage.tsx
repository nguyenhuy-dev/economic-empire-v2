import { useState } from 'react'
import { teams as teamSeed } from '../data/teams'
import { getGameConfig } from '../data/game'

const MIN_TEAMS = 2
const MAX_TEAMS = teamSeed.length // 10

export default function SetupPage({
  onStart,
  onBack,
}: {
  onStart: (numTeams: number) => void
  onBack: () => void
}) {
  const [numTeams, setNumTeams] = useState(4)
  const config = getGameConfig(numTeams)
  const playing = teamSeed.slice(0, numTeams)

  const clamp = (n: number) => Math.max(MIN_TEAMS, Math.min(MAX_TEAMS, n))

  return (
    <div className="lobby-wrap">
      <div className="lobby-panel" style={{ maxWidth: 520 }}>
        <button className="btn-back" onClick={onBack} style={{ marginBottom: 20 }}>
          ← Trang chủ
        </button>

        <h1 style={{ textAlign: 'center', marginBottom: 6, fontSize: 24 }}>🏛️ Đế chế Kinh tế</h1>
        <p className="muted" style={{ textAlign: 'center', marginBottom: 24 }}>
          Quản trò chọn số nhóm chơi rồi điều hành mọi thao tác trên cùng một máy.
        </p>

        {/* Bộ chọn số nhóm */}
        <p style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>Số nhóm tham gia</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
            marginBottom: 18,
          }}
        >
          <button
            className="btn-ghost"
            style={{ fontSize: 22, width: 44, height: 44, lineHeight: 1 }}
            disabled={numTeams <= MIN_TEAMS}
            onClick={() => setNumTeams((n) => clamp(n - 1))}
          >
            −
          </button>
          <div style={{ textAlign: 'center', minWidth: 80 }}>
            <div style={{ fontSize: 44, fontWeight: 800, fontFamily: "'Space Mono', monospace", lineHeight: 1 }}>
              {numTeams}
            </div>
            <div className="muted" style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' }}>
              nhóm
            </div>
          </div>
          <button
            className="btn-ghost"
            style={{ fontSize: 22, width: 44, height: 44, lineHeight: 1 }}
            disabled={numTeams >= MAX_TEAMS}
            onClick={() => setNumTeams((n) => clamp(n + 1))}
          >
            +
          </button>
        </div>

        {/* Chọn nhanh */}
        <div className="cb-teams" style={{ flexWrap: 'wrap', gap: 6, justifyContent: 'center', marginBottom: 22 }}>
          {Array.from({ length: MAX_TEAMS - MIN_TEAMS + 1 }, (_, i) => i + MIN_TEAMS).map((n) => (
            <button
              key={n}
              className={'cb-team' + (n === numTeams ? ' on' : '')}
              style={{ '--tc': 'var(--gold)' } as React.CSSProperties}
              onClick={() => setNumTeams(n)}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Xem trước các nhóm sẽ chơi */}
        <p style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>Các nhóm sẽ tham gia</p>
        <div className="cb-teams" style={{ flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
          {playing.map((t) => (
            <span
              key={t.id}
              className="cb-team on"
              style={{ '--tc': t.color, cursor: 'default' } as React.CSSProperties}
            >
              {t.logo} {t.name.replace('Tập đoàn ', '')}
            </span>
          ))}
        </div>

        {/* Tóm tắt cấu hình theo sĩ số */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 8,
            marginBottom: 24,
          }}
        >
          <ConfigStat label="Vốn khởi đầu" value={`${config.startingCash}B`} />
          <ConfigStat label="Số round" value={`${config.totalRounds}`} />
          <ConfigStat label="Tổng cổ phần / công ty" value={`${config.totalShares}`} />
          <ConfigStat label="Ngưỡng thâu tóm" value={`${config.earlyWinShares} cp`} />
        </div>

        <button className="btn-primary" style={{ width: '100%' }} onClick={() => onStart(numTeams)}>
          ▶ Bắt đầu ván đấu
        </button>
      </div>
    </div>
  )
}

function ConfigStat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '10px 12px',
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>{value}</div>
      <div className="muted" style={{ fontSize: 11 }}>{label}</div>
    </div>
  )
}
