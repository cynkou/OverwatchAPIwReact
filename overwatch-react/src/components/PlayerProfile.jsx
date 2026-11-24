
function PlayerProfile({ player }) {
  return (
    <section className="profile-section">
      <div className="profile-avatar">
        {player.username?.charAt(0).toUpperCase()}
      </div>

      <div className="profile-info">
        <h2>{player.username}</h2>
        <p>{player.name}</p>
        <span className="status-tag">PLAYER PROFILE</span>
      </div>
    </section>
  )
}

export default PlayerProfile
