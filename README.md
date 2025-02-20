# ⛅️ myWeather - A simple weather app in JavaScript
- Check the current weather and weather forecast for current location
- Search for different towns and cities across the world to get current weather and weather forecast for a specific location
- Save favourite locations in a list for quick access <br>
Live demo is [here]()<br>

### How does application work? 🔧
Application contains a database of cities across the world that contains latitudes and longitudes. Application gets users location (lat, lng) and sends a request to API to get current and future weather for location. User can search for a specific feature. Once the user starts typing in a search bar, application sends a request to a database to get all cities and their coordinates that look like user's search. Click on a city in the search sends a request to API and fetches the weather for a specified location and displays it in a new window. When user click "Save location" app makes a record of a location to the local storage so it will be available later. Clicking on "Saved locations" opens up a list of favourite user locations from a local storage.<br>

## TechStach ⚙️
- ⚡ ReactJS
- ⚡ NodeJS
- ⚡ PostgreSQL
- ⚡ ExpressJS
- ⚡ Axios
- ⚡ Supabase
- ⚡ [Weather API](https://www.weatherapi.com) <br>
Requirements:
- NodeJS: `22.11.0`
- ExpressJS: `^4.21.2`
- Axios: `^1.7.9`
- Dotenv: `^16.4.7`
- PG: `^8.13.1`
- React: `^19.0.0`
- ReactDOM: `^19.0.0`
- Jest: `^29.7.0` - dev dependency
- Supertest `^7.0.0` - dev dependency
- PG Format: `^1.0.4` - dev dependency

## Installation 👨‍💻
1. Fork the repo and clone in down
2. Create a Supabase account
3. Save you database password from Supabase setup
4. In your Supabase account click on `Connect` and copy your database connection from `Transaction pooler` section
5. In your terminal run `npm install` command to install all required dependencies
6. In the root directory create a `.env.production` file and set `DATABASE_URL=*your URL*`. Change \*your URL\* to your actual database connection URL you have copied in `step 4`. Make sure to change `[YOUR-PASSWORD]` to your actual database password you have saved in `step 3`
7. Go to [Weather API](https://www.weatherapi.com) and create a free account. Save your API key
8. In the root directory create a `.env.api` file and set `API_KEY=*your-api-key*`. Change \*your-api-key\* to your actual API key you have saved in `step 7`.
9. In your terminal run a command `npm run seed` to create a table with cities and seed it with data
10. Run `npm test integrations.test.js` to make sure everything is set up and working correctly. If all tests fails try to remove `.skip` from the last test in `integrations.test.js` to check if there is a problem with the API key. If problem is not related to the Weather API key - look into seeding<br><br>

## How to run locally 🏠
As application is made up of 2 parts you have to run both, frontend and backend. It adds one additional step in configuration
1. Run `npm install` command in your root directory to get backend modules
2. Run `npm install` command in `frontend` directory to get frontend modules
3. Add proxy settings to make frontend and backend listen to the same port as by default frontend is running on port 5173 and backend is on port 3000. To do this go to `frontend/vite.config.js` and make sure it looks like this (you can remove it later as you're done with running locally):
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
```
4. Run `npm run server` command to start a backend
5. Open additional terminal and run `npm run dev` to start your frontend

## Project structure 👨‍💻
- `__tests__` - includes integration tests for backend
- `api` - includes backend of the project. 2 contollers and 2 models. Internal controllers and models are for database interactions, external models and controllers for interacting with Weather API
- `config` - settings to get access to your database and Weather API throughout the application
- `data` - includes some dummy data for tests as well as data for seeding your production database
- `frontend` - includes react application and all required components