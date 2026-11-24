
function SearchBar({ playerName, setPlayerName, onSearch, loading }) {
    return (
        <div>
            <h2>Player Lookup</h2>

            <div className="search-bar">
                <input
                    className="player-input"
                    type="text"
                    placeholder="Enter BattleTag or player name (Example: Player-1234)"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />

                <button
                    className="fetch-button"
                    onClick={onSearch}
                    disabled={loading}
                >
                    {loading ? 'Searching...' : 'Search Player'}
                </button>
            </div>
        </div>
    )
}

export default SearchBar
