import TeamBlock from './TeamBlock.jsx'

export default function EventCard({ event }) {
  const hasTeams = event.teams && event.teams.length > 0
  const hasHotels = hasTeams && event.teams.some((t) => t.hotels && t.hotels.length > 0)

  let guidance = null
  if (event.action && event.travel === 'fly') {
    guidance = {
      cls: 'fly',
      text: '✈ Flights required. Families may begin booking flights now — team hotel details will follow.',
    }
  } else if (event.action && event.travel === 'either') {
    guidance = {
      cls: 'fly',
      text: '✈/🚗 Long-distance trip — families may fly or drive. If flying, you may begin booking flights now. Team hotel details will follow.',
    }
  } else if (!event.confirmed && !event.action) {
    guidance = {
      cls: 'caution',
      text: 'This event is on our travel plan but participation is NOT yet confirmed. Please do not book flights, hotels, or make any travel arrangements until participation is confirmed.',
    }
  } else if (event.confirmed && !hasHotels && !event.action) {
    guidance = {
      cls: 'info',
      text: 'Participation confirmed. Team hotel details will be posted here soon.',
    }
  }

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
            {event.travel === 'fly' && <span className="indicator indicator-blue">✈ Flights</span>}
            {event.travel === 'either' && <span className="indicator indicator-blue">✈/🚗 Fly or Drive</span>}
          </div>
        </div>
        <span className="chevron" aria-hidden="true" />
      </summary>

      <div className="event-body">
        {guidance && <p className={`guidance guidance-${guidance.cls}`}>{guidance.text}</p>}
        {event.note && <p className="event-note">{event.note}</p>}

        {hasTeams && (
          <div className="team-list">
            {event.teams.map((team, i) => (
              <TeamBlock key={`${team.team}-${i}`} team={team} />
            ))}
          </div>
        )}
      </div>
    </details>
  )
}
