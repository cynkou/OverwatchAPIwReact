# Overwatch 2 Tracker

A React-based Overwatch 2 dashboard that uses TeKrop's OverFast API to retrieve hero information and player statistics.

## Features

- **Hero Directory:** Displays Overwatch 2 heroes with their portraits and roles.
- **Hero Filtering:** Filter heroes by All Heroes, Tank, Damage, or Support.
- **Player Search:** Search for Overwatch 2 players by username or BattleTag.
- **Player Profiles:** View a player's profile information after selecting a search result.
- **Player Statistics:** Displays general statistics, including win rate, games played, average eliminations, and average deaths.
- **Responsive Design:** Dark-themed interface with purple accents and responsive layouts.

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- TeKrop's OverFast API

## Installation

Follow these instructions to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/cynkou/OverwatchAPIwReact.git
```

### 2. Navigate to the project folder

```bash
cd OverwatchAPIwReact
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the localhost URL displayed in your terminal to access the application.

## How to Use

### Player Search

1. Locate the Player Lookup section.
2. Enter an Overwatch 2 player's username or full BattleTag.
3. Click the **Search Player** button.
4. If searching by username, select the correct player from the search results.
5. Click **View Profile** to load the player's profile and statistics.

### Hero Directory

1. Scroll to the Overwatch Heroes section.
2. Use the filter buttons to select a category:
   - **All Heroes:** Displays every available hero.
   - **Tank:** Displays Tank heroes.
   - **Damage:** Displays Damage heroes.
   - **Support:** Displays Support heroes.
3. Select another filter at any time to change the displayed heroes.

## API Information

This project uses [TeKrop's OverFast API](https://overfast-api.tekrop.fr/) to retrieve Overwatch 2 hero information, player profiles, and player statistics.

The application retrieves data dynamically through API requests.

## Project Structure

```text
overwatch-react/
├── src/
│   ├── components/
│   │   ├── HeroCard.jsx
│   │   ├── HeroList.jsx
│   │   ├── PlayerProfile.jsx
│   │   └── SearchBar.jsx
│   ├── services/
│   │   └── overwatchAPI.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Author

Developed as a React API project using Vite and TeKrop's OverFast API.