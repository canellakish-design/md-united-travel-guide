import { useState, useMemo } from 'react'
import { CLUB, events } from './data/events.js'
import EventCard from './components/EventCard.jsx'

const AGE_ORDER = ['U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18/19']

export default function App() {
  const [query, setQuery] = useState('')
  const [age, setAge] = useState('')

  const ageOptions = useMemo(() => {
    const set = new Set(events.flatMap((e) => e.ages || []))
    return AGE_ORDER.filter((a) => set.has(a))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return events.filter((e) => {
      const matchesAge = !age || (e.ages || []).includes(age)
      const matchesQuery =
        !q ||
        [e.name, e.location, e.dates, ...(e.teams || []).map((t) => t.team)]
          .join(' ')
          .toLowerCase()
          .includes(q)
      return matchesAge && matchesQuery
    })
  }, [query, age])

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead-inner">
          <p className="eyebrow">{CLUB.name} · {CLUB.program}</p>
          <h1>{CLUB.title}</h1>
          <p className="season">{CLUB.season} Season</p>
        </div>
      </header>

      <main className="container">
        <section className="intro">
          <p>
            Traveling with your player? Find your team below, book before the deadline,
            and use the team code at checkout. Filter by age group to see only your team’s trips.
          </p>
        </section>

        <div className="toolbar">
          <select
            className="age-select"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            aria-label="Filter by age group"
          >
            <option value="">All age groups</option>
            {ageOptions.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
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
          {filtered.length === 0 && <p className="empty">No events match your filters.</p>}
        </div>
      </main>

      <footer className="site-footer">
        <p>{CLUB.name} — {CLUB.program} · {CLUB.season}</p>
        <p className="fine">Questions about travel or hotels? Contact your team manager or the club office.</p>
      </footer>
    </div>
  )
}
