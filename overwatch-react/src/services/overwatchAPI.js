const BASE_URL = 'https://overfast-api.tekrop.fr'

export async function getHeroes() {
    const response = await fetch(`${BASE_URL}/heroes`)

    if (!response.ok) {
        throw new Error ('Failed to fetch heroes')
    }

    const data = await response.json()

    return data
}

export async function searchPlayers(playerName) {
    const url = `${BASE_URL}/players?name=${encodeURIComponent(playerName)}`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Unable to search for players. Please try again.')
    }

    const data = await response.json()

    return data.results || []
}

export async function getPlayerProfile(playerId) {
    const url = `${BASE_URL}/players/${encodeURIComponent(playerId)}/summary`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Unable to load player stats. Please try again.')
    }

    return await response.json()
}

export async function getPlayerStats(playerId) {
    const url = `${BASE_URL}/players/${encodeURIComponent(playerId)}/stats/summary`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Unable to load player statistics.')
    }

    return await response.json()
}