# ⛅️ myWeather - A simple weather app in JavaScript
- Check the current weather and weather forecast for current location
- Search for different towns and cities across the world to get current weather and weather forecast for a specific location
- Save favourite locations in a list for quick access <br><br>
Live demo is [here](https://my-weather-by-max-kly.netlify.app/)

### How does application work? 🔧
Application contains a database of cities across the world that contains latitudes and longitudes. Application gets users location (lat, lng) and sends a request to API to get current and future weather for location. User can search for a specific feature. Once the user starts typing in a search bar, application sends a request to a database to get all cities and their coordinates that look like user's search. Click on a city in the search sends a request to API and fetches the weather for a specified location and displays it in a new window. When user click "Save location" app makes a record of a location to the local storage so it will be available later. Clicking on "Saved locations" opens up a list of favourite user locations from a local storage.<br>

## TechStach ⚙️
- ⚡ ReactJS
- ⚡ NodeJS
- ⚡ PostgreSQL
- ⚡ ExpressJS
- ⚡ Axios
- ⚡ Supabase
- ⚡ Render
- ⚡ Netlify
- ⚡ [Weather API](https://www.weatherapi.com) <br><br>
Requirements:<br><br>
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
5. In your terminal go to the `backend` directory and run `npm install` command to install all required dependencies for backend
6. In your terminal go to the `frontend` directory and run `npm install` command to install all required dependencies for frontend
7. In the root directory create a `.env.production` file and set `DATABASE_URL=*your URL*`. Change \*your URL\* to your actual database connection URL you have copied in `step 4`. Make sure to change `[YOUR-PASSWORD]` to your actual database password you have saved in `step 3`
8. Go to [Weather API](https://www.weatherapi.com) and create a free account. Save your API key
9. In the root directory create a `.env.api` file and set `API_KEY=*your-api-key*`. Change \*your-api-key\* to your actual API key you have saved in `step 8`.
10. In your terminal go to the `backend` directory and run `npm run seed` command to create a table with cities and seed it with data
11. From the `backend` directory in your terminal run `npm test integrations.test.js` to make sure everything is set up and working correctly. If all tests fails try to remove `.skip` from the last test in `integrations.test.js` to check if there is a problem with the API key. If problem is not related to the Weather API key - look into seeding<br><br>
12. To remove or change `Footer` go to `frontend/src/components/Footer.jsx`

## How to run locally 🏠
As application is made up of 2 parts you have to run both, frontend and backend. It adds one additional step in configuration
1. Open up `frontend` directory and in `.env` file remove or comment out `BACKEND_URL` key. As you fork and clone down the repo by default there will be hardcoded URL to my backend
2. Go to `backend` directory in your terminal and run `npm run server` command to start backend
3. Open additional terminal, open up a `frontend` directory in your terminal and run `npm run dev` to start your frontend

## Project structure 👨‍💻
- `backend`:
- - `__tests__` - includes integration tests for backend
- - `api` - includes backend of the project. 2 controllers and 2 models. Internal controllers and models are for database interactions, external models and controllers for interacting with Weather API
- - `config` - settings to get access to your database and Weather API throughout the application
- `data` - includes some dummy data for tests as well as data for seeding your production database
- `frontend` - includes React application and all required components

## Deployment ☁️
1. Head to the [Render](https://render.com) and create a new account or sign in to existing one
2. Click on `New` and choose `Web service`
3. Choose your source code. It can be either `Git Provider` or a specific `Public Git Repository`. Just pick most suitable for you option and click on `Connect`
4. Leave other options such as `Language` and `Branch` as they are and for option `Root Directory` set `backend`.
5. Set `Start command` to `yarn start`
6. In `Environment Variables` add your variables from your `.env` files as a key-value pair. Add your `API_KEY` and `DATABASE_URL`
7. Click on Deploy Web Service
8. Copy your live URL for your deployed backend
9. Open up `frontend` folder and in `.env` set `VITE_BACKEND_URL=*your-url*`. Change \*your-url\* to your actual URL you have saved in `step 8`.
10. Go to the [Netlify](https://www.netlify.com) and create a new account or sign in to existing one
11. Set up your team and create a new project, connect your GitHub account
12. Install Netlify CLI running `npm install netlify-cli -g` command
13. Open up `frontend` directory in your terminal and run `npm run build` command to prepare your frontend for deployment
14. In the same directory run `netlify deploy --prod` command and choose an exisiting project
15. For publishing direcotry enter `dist`

## `noSleep.js`
`noSleep.js` file in the `backend` folder prevents Render from spinning down and turning off bacause of free plan. If you don't need that - delete the file and inside of `backend/api/index.js` remove `noSleep.js` from required files and from calling it on line 25.