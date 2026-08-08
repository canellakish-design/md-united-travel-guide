import TeamBlock from './TeamBlock.jsx'

export default function EventCard({ event }) {
  const hasTeams = event.teams && event.teams.length > 0

  return (
    <details className="event" open={event.action}>
      <summary className="event-summary">
        <div className="event-summary-text">
          <h2 className="event-name">{event.name}</h2>
          <p className="event-meta">{event.dates} &nbsp;·&nbsp; {event.location}</p>
          <div className="indicators">
            <span className={`indicator ${event.confirmed ? 'indicator-green' : 'indicator-grey'}`}>
              {event.confirmed ? 'Participation Confirmed' : 'Pending Confirmation'}
            </span>
            {event.action && <span className="indicator indicator-red">Action Needed</span>}
          </div>
        </div>
        <span className="chevron" aria-hidden="true" />
      </summary>

      <div className="event-body">
        {event.note && <p className="event-note">{event.note}</p>}

        {hasTeams ? (
          <div className="team-list">
            {event.teams.map((team, i) => (
              <TeamBlock key={`${team.team}-${i}`} team={team} />
            ))}
          </div>
        ) : (
          <p className="event-empty">Hotel details will be posted once assignments are confirmed.</p>
        )}
      </div>
    </details>
  )
}
