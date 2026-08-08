import { useState, useMemo } from 'react'
import { CLUB, events } from './data/events.js'
import EventCard from './components/EventCard.jsx'

export default function App() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return events
    return events.filter((e) =>
      [e.name, e.location, e.dates, ...(e.teams || []).map((t) => t.team)]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [query])

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead-inner">
          <div className="crest" aria-hidden="true">MU</div>
          <div className="masthead-text">
            <p className="eyebrow">{CLUB.name} · {CLUB.program}</p>
            <h1>{CLUB.title}</h1>
            <p className="season">{CLUB.season} Season</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="intro">
          <p>
            Traveling with your player? Below is every tournament and showcase weekend,
            with the team hotel blocks, booking deadlines, and links. Find your team,
            book before the deadline, and use the team code at checkout.
          </p>
        </section>

        <div className="toolbar">
          <input
            className="search"
            type="search"
            placeholder="Search by event, city, or team…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search events"
          />
          <span className="count">{filtered.length} event{filtered.length === 1 ? '' : 's'}</span>
        </div>

        <div className="event-list">
          {filtered.map((event) => (
            <EventCard key={event.no} event={event} />
          ))}
          {filtered.length === 0 && (
            <p className="empty">No events match “{query}”.</p>
          )}
        </div>
      </main>

      <footer className="site-footer">
        <p>{CLUB.name} — {CLUB.program} · {CLUB.season}</p>
        <p className="fine">Questions about travel or hotels? Contact your team manager or the club office.</p>
      </footer>
    </div>
  )
}
