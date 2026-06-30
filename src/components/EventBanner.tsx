const typeMeta = {
  good: { color: '#22c55e', label: 'Tích cực' },
  bad: { color: '#ef4444', label: 'Tiêu cực' },
  neutral: { color: '#8b97b5', label: 'Trung tính' },
}

export default function EventBanner({ event }) {
  if (!event) return null
  const t = typeMeta[event.type]
  return (
    <div className="event-banner" style={{ '--ec': t.color }}>
      <span className="ei">{event.icon}</span>
      <div>
        <div className="et">Sự kiện: {event.title}</div>
        <div className="ed">{event.desc}</div>
      </div>
      <span className="ebadge">{t.label}</span>
    </div>
  )
}
