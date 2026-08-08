export default function TeamBlock({ team }) {
  const hasHotels = team.hotels && team.hotels.length > 0
  const hasLink = team.hotelLink && team.hotelLink.length > 0

  return (
    <div className="team-block">
      <div className="team-block-head">
        <h3 className="team-name">{team.team}</h3>
        {team.teamCode && (
          <span className="team-code" title="Use this code at checkout">
            Code: <strong>{team.teamCode}</strong>
          </span>
        )}
      </div>

      <div className="team-facts">
        {team.bookDeadline && (
          <span className="fact fact-deadline">
            <span className="fact-label">Book by</span> {team.bookDeadline}
          </span>
        )}
        {team.arrivalDate && (
          <span className="fact">
            <span className="fact-label">Arrive</span> {team.arrivalDate}
          </span>
        )}
        {team.numRooms != null && (
          <span className="fact">
            <span className="fact-label">Block</span> {team.numRooms} rooms
          </span>
        )}
      </div>

      {hasHotels ? (
        <ul className="hotel-list">
          {team.hotels.map((h, i) => (
            <li key={i} className="hotel">
              <div className="hotel-info">
                <span className="hotel-name">{h.name}</span>
                {h.address && (
                  <a
                    className="hotel-address"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + h.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {h.address}
                  </a>
                )}
                {h.rooms && <span className="hotel-rooms">{h.rooms}</span>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="hotel-empty">Hotel block coming soon.</p>
      )}

      <div className="team-actions">
        {hasLink ? (
          <a className="book-btn" href={team.hotelLink} target="_blank" rel="noopener noreferrer">
            Book Rooms
          </a>
        ) : (
          <span className="book-btn book-btn-disabled" aria-disabled="true">
            Booking Link Coming Soon
          </span>
        )}
      </div>
    </div>
  )
}
