
import { useState, useEffect } from 'react'
import HeroList from './components/HeroList'
import SearchBar from './components/SearchBar'
import PlayerProfile from './components/PlayerProfile'
import './App.css'

import {
  getHeroes,
  searchPlayers,
  getPlayerProfile,
  getPlayerStats,
} from './services/overwatchAPI'

function App() {
  const [selectedRole, setSelectedRole] = useState('All')
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const data = await getHeroes()
        setHeroes(data)
      } catch (error) {
        setError('Unable to load heroes. Please try again.')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchHeroes()
  }, [])

  async function handleSearch() {
    const name = playerName.trim()

    if (!name) {
      setMessage('Please enter a BattleTag or player name.')
      return
    }

    setMessage('')
    setSearchResults([])

    const isFullBattleTag = /^.+-\d+$/.test(name)

    if (isFullBattleTag) {
      await handleSelectPlayer(name)
      return
    }

    setSearchLoading(true)

    try {
      const results = await searchPlayers(name)

      if (results.length === 0) {
        setMessage('No players found. Check the player name.')
        return
      }

      setSearchResults(results)
      setMessage('Choose a player from the search results.')
    } catch (error) {
      setMessage('Something went wrong while searching.')
      console.error(error)
    } finally {
      setSearchLoading(false)
    }
  }

  async function handleSelectPlayer(playerId) {
    try {
      setSearchLoading(true)
      setMessage('Loading player profile...')

      const profile = await getPlayerProfile(playerId)
      const stats = await getPlayerStats(playerId)

      setSelectedPlayer({
        ...profile,
        stats: stats,
      })

      setSearchResults([])
      setMessage('Player profile loaded!')
    } catch (error) {
      setSelectedPlayer(null)
      setMessage('Could not load this player. Try another player.')
      console.error(error)
    } finally {
      setSearchLoading(false)
    }
  }

  const filteredHeroes =
    selectedRole === 'All'
      ? heroes
      : heroes.filter((hero) => hero.role === selectedRole)

  return (
    <>
      <header className="navbar">
        <h1 className="logo">OVERWATCH 2 TRACKER</h1>
        <p>PLAYER DASHBOARD</p>
      </header>

      <main className="dashboard">
        <section className="search-section">
          <SearchBar
            playerName={playerName}
            setPlayerName={setPlayerName}
            onSearch={handleSearch}
            loading={searchLoading}
          />
        </section>

        <p id="message">{message}</p>

        <div className="search-grid">
          {searchResults.map((player) => (
            <div className="search-result-card" key={player.player_id}>
              <h3>{player.name}</h3>

              <button
                className="view-profile-button"
                onClick={() => handleSelectPlayer(player.player_id)}
                disabled={searchLoading}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>

        {selectedPlayer && (
          <>
            <PlayerProfile player={selectedPlayer} />

            <section className="stats-section">
              <h2>General Statistics</h2>

              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Win Rate</h3>
                  <p>{selectedPlayer.stats.general.winrate ?? 'N/A'}%</p>
                </div>

                <div className="stat-card">
                  <h3>Games Played</h3>
                  <p>
                    {selectedPlayer.stats.general.games_played ?? 'N/A'}
                  </p>
                </div>

                <div className="stat-card">
                  <h3>Average Eliminations</h3>
                  <p>
                    {selectedPlayer.stats.general.average?.eliminations ?? 'N/A'}
                  </p>
                </div>

                <div className="stat-card">
                  <h3>Average Deaths</h3>
                  <p>
                    {selectedPlayer.stats.general.average?.deaths ?? 'N/A'}
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {loading && <p>Loading Heroes...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <>
            <div className="filter-buttons">
              <button onClick={() => setSelectedRole('All')}>
                All Heroes
              </button>

              <button onClick={() => setSelectedRole('tank')}>
                Tank
              </button>

              <button onClick={() => setSelectedRole('damage')}>
                Damage
              </button>

              <button onClick={() => setSelectedRole('support')}>
                Support
              </button>
            </div>

            <HeroList heroes={filteredHeroes} />
          </>
        )}
      </main>

      <footer>
        <p>Overwatch 2 Tracker | Powered by TeKrop's API</p>
      </footer>
    </>
  )
}

export default App
