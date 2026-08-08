import { STATUS } from '../data/events.js'
import TeamBlock from './TeamBlock.jsx'

export default function EventCard({ event }) {
  const status = STATUS[event.status] || STATUS.pending
  const hasTeams = event.teams && event.teams.length > 0

  return (
    <article className="event-card">
      <div className="event-head">
        <div className="event-head-main">
          <span className="event-no">Event {event.no}</span>
          <h2 className="event-name">{event.name}</h2>
          <p className="event-meta">
            <span className="event-dates">{event.dates}</span>
            <span className="dot">•</span>
            <span className="event-loc">{event.location}</span>
          </p>
        </div>
        <span className={`badge badge-${status.tone}`}>{status.label}</span>
      </div>

      {event.note && <p className="event-note">{event.note}</p>}

      {hasTeams ? (
        <div className="team-list">
          {event.teams.map((team, i) => (
            <TeamBlock key={`${team.team}-${i}`} team={team} />
          ))}
        </div>
      ) : (
        <p className="event-empty">
          Team hotel details will be posted here once assignments and room blocks are confirmed.
        </p>
      )}
    </article>
  )
}
