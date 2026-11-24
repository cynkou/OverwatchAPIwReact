
import HeroCard from './HeroCard'

function HeroList({ heroes }) {
  return (
    <section className="heroes-section">
      <div className="section-heading">
        <h2>Overwatch Heroes</h2>
        <span>{heroes.length} HEROES</span>
      </div>

      <div className="hero-grid">
        {heroes.map((hero) => (
          <HeroCard key={hero.key} hero={hero} />
        ))}
      </div>
    </section>
  )
}

export default HeroList
