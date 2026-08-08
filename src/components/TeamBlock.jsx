export default function TeamBlock({ team }) {
  const hasHotels = team.hotels && team.hotels.length > 0
  const hasLink = team.hotelLink && team.hotelLink.length > 0

  const facts = [
    team.bookDeadline && { label: 'Book by', value: team.bookDeadline, key: 'deadline' },
    team.arrivalDate && { label: 'Arrive', value: team.arrivalDate },
    team.travelMode && { label: 'Travel', value: team.travelMode },
    team.players != null && { label: 'Players', value: `${team.players}` },
    team.coaches && { label: 'Coaches', value: team.coaches },
    team.numRooms != null && { label: 'Rooms needed', value: `${team.numRooms}` },
  ].filter(Boolean)

  return (
    <div className="team">
      <div className="team-head">
        <h3 className="team-name">{team.team}</h3>
        {team.teamCode && <span className="team-code">Code {team.teamCode}</span>}
      </div>

      {facts.length > 0 && (
        <dl className="team-facts">
          {facts.map((f, i) => (
            <div className={`fact${f.key === 'deadline' ? ' fact-deadline' : ''}`} key={i}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {hasHotels && (
        <ul className="hotels">
          {team.hotels.map((h, i) => (
            <li key={i}>
              <a
                className="hotel-name"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + h.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {h.name}
              </a>
              {h.rooms && <span className="hotel-rooms"> — {h.rooms}</span>}
            </li>
          ))}
        </ul>
      )}

      {hasLink ? (
        <a className="book-btn" href={team.hotelLink} target="_blank" rel="noopener noreferrer">
          Book Rooms →
        </a>
      ) : (
        <span className="book-soon">Booking link coming soon</span>
      )}
    </div>
  )
}
