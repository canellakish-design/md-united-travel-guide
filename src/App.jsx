import { useState, useEffect, useMemo } from 'react'
import { CLUB, events } from './data/events.js'
import EventListItem from './components/EventListItem.jsx'
import EventDetail from './components/EventDetail.jsx'

const AGE_ORDER = ['U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18/19']

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash
}

function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <p className="eyebrow">{CLUB.name} · {CLUB.program}</p>
        <h1>{CLUB.title}</h1>
        <p className="season">{CLUB.season} Season</p>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>{CLUB.name} — {CLUB.program} · {CLUB.season}</p>
      <p className="fine">Questions about travel or hotels? Contact your team manager or the club office.</p>
    </footer>
  )
}

function ListView() {
  const [age, setAge] = useState('')

  const ageOptions = useMemo(() => {
    const set = new Set(events.flatMap((e) => e.ages || []))
    return AGE_ORDER.filter((a) => set.has(a))
  }, [])

  const filtered = useMemo(
    () =>
      events
        .filter((e) => !age || (e.ages || []).includes(age))
        .sort((a, b) => (a.sortDate || '').localeCompare(b.sortDate || '')),
    [age],
  )

  return (
    <main className="container">
      <section className="intro">
        <p>
          Every travel weekend, showcase, and tournament is listed below. Filter by your
          player’s age group, then tap an event to see that team’s hotels, deadlines, room
          blocks, and booking links.
        </p>
      </section>

      <div className="toolbar">
        <select className="age-select" value={age} onChange={(e) => setAge(e.target.value)} aria-label="Filter by age group">
          <option value="">All age groups</option>
          {ageOptions.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <span className="count">{filtered.length} event{filtered.length === 1 ? '' : 's'}</span>
      </div>

      <div className="list">
        {filtered.map((event, i) => (
          <EventListItem key={event.no} event={event} number={i + 1} />
        ))}
        {filtered.length === 0 && <p className="empty">No events for that age group.</p>}
      </div>
    </main>
  )
}

export default function App() {
  const hash = useHashRoute()
  const match = hash.match(/#\/event\/(\d+)/)
  const current = match ? events.find((e) => String(e.no) === match[1]) : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [hash])

  return (
    <div className="page">
      <Masthead />
      {current ? (
        <main className="container">
          <EventDetail event={current} />
        </main>
      ) : (
        <ListView />
      )}
      <Footer />
    </div>
  )
}
