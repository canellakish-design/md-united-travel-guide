import { useState, useEffect, useMemo } from 'react'
import { CLUB, events } from './data/events.js'
import EventListItem from './components/EventListItem.jsx'
import EventDetail from './components/EventDetail.jsx'

// All team labels used by an event (hotel blocks, team lists, and league game rows).
function eventTeams(e) {
  return new Set([
    ...(e.teamsList || []),
    ...(e.teams || []).map((t) => t.team),
    ...(e.games || []).map((g) => g.team),
  ])
}

function teamSortKey(label) {
  const age = parseInt((label.match(/U(\d+)/) || [])[1] || '99', 10)
  return [age, label]
}

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
        <a href="#/" className="crest-link">
          <img className="crest" src="/crest.png" alt="Maryland United FC crest" />
        </a>
        <div className="masthead-text">
          <p className="eyebrow">{CLUB.name} · {CLUB.program}</p>
          <h1>{CLUB.title}</h1>
          <p className="season">{CLUB.season} Season</p>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>{CLUB.name} — {CLUB.program} · {CLUB.season}</p>
      <p className="fine">Any questions, contact Jen Pagliaro — <a href="mailto:jen.pagliaro@mdunitedfc.org">jen.pagliaro@mdunitedfc.org</a></p>
    </footer>
  )
}

function ListView() {
  const [team, setTeam] = useState('')

  const teamOptions = useMemo(() => {
    const set = new Set()
    events.forEach((e) => eventTeams(e).forEach((t) => set.add(t)))
    return [...set].sort((a, b) => {
      const [aa, al] = teamSortKey(a)
      const [ba, bl] = teamSortKey(b)
      return aa - ba || al.localeCompare(bl)
    })
  }, [])

  const filtered = useMemo(
    () =>
      events
        .filter((e) => !team || eventTeams(e).has(team))
        .sort((a, b) => (a.sortDate || '').localeCompare(b.sortDate || '')),
    [team],
  )

  return (
    <main className="container">
      <section className="intro">
        <p>
          Every travel weekend, showcase, and tournament is listed below. Filter by your
          team, then tap an event to see that team’s hotels, deadlines, room blocks, and
          booking links.
        </p>
      </section>

      <div className="toolbar">
        <select className="age-select" value={team} onChange={(e) => setTeam(e.target.value)} aria-label="Filter by team">
          <option value="">All teams</option>
          {teamOptions.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <span className="count">{filtered.length} event{filtered.length === 1 ? '' : 's'}</span>
      </div>

      <div className="list">
        {filtered.map((event, i) => (
          <EventListItem key={event.no} event={event} number={i + 1} />
        ))}
        {filtered.length === 0 && <p className="empty">No events for that team.</p>}
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
