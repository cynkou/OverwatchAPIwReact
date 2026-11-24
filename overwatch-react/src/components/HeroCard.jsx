function HeroCard({ hero }) {
  return (
    <div className="hero-card">
      <img
        src={hero.portrait}
        alt={hero.name}
        className="hero-image"
      />

      <h3>{hero.name}</h3>
      <p>Role: {hero.role}</p>
    </div>
  )
}

export default HeroCard