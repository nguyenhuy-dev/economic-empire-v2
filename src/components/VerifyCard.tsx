import { useState } from 'react'

interface VerifyCardProps {
  onClose: () => void
  onSuccess: () => void
}

export default function VerifyCard({ onClose, onSuccess }: VerifyCardProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'string12345') {
      setError(false)
      onSuccess()
    } else {
      setError(true)
    }
  }

  return (
    <div className="modal-overlay" style={{ display: 'grid', placeItems: 'center' }}>
      <div className="modal panel" style={{ maxWidth: '400px', width: '100%', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            fontSize: 20,
            color: 'var(--text-dim)',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          &times;
        </button>
        <span style={{ fontSize: 32 }}>🔒</span>
        <h2 className="modal-title" style={{ marginTop: 10, letterSpacing: 2 }}>
          Xác thực Quản trò
        </h2>
        <p className="modal-reason" style={{ marginBottom: 20 }}>
          Vui lòng nhập mật khẩu để bắt đầu ván đấu
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (error) setError(false)
              }}
              autoFocus
              style={{
                width: '100%',
                background: 'var(--bg-2)',
                border: error ? '1px solid var(--red)' : '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
                padding: '12px 14px',
                fontSize: 14,
                fontFamily: 'var(--mono)',
                textAlign: 'center',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
            />
            {error && (
              <p style={{ color: 'var(--red)', fontSize: 11, marginTop: 6, fontFamily: 'var(--mono)' }}>
                ❌ Mật khẩu không chính xác!
              </p>
            )}
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--text-dim)',
                background: 'var(--bg-2)',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--panel-2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-2)' }}
            >
              Hủy
            </button>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: '12px',
                background: 'var(--gold)',
                color: '#000',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
