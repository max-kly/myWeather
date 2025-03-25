# ⛅️ myWeather - A Simple Weather App in JavaScript

[Live Demo](https://my-weather-by-max-kly.netlify.app/)

## Features 🌍
- ✅ Check the **current weather** and **weather forecast** for your location.
- ✅ Search for different **towns and cities** worldwide to get weather updates.
- ✅ Save **favourite locations** in a list for quick access.

## How It Works 🔧
The app uses a **database of cities** that includes their latitude and longitude. It fetches the user's location and sends a request to the API to retrieve the **current and forecasted weather**.  

### Search Feature 🔍
- As you start typing in the **search bar**, the app queries the database for **matching cities and coordinates**.
- Clicking on a city **fetches** its weather and **displays** it in a new window.
- Clicking **"Save Location"** stores it in the **local storage**, making it available later.
- Clicking **"Saved Locations"** opens the list of **saved locations** from local storage.

---

## Tech Stack ⚙️

- ⚡ **ReactJS**
- ⚡ **NodeJS**
- ⚡ **PostgreSQL**
- ⚡ **ExpressJS**
- ⚡ **Axios**
- ⚡ **Supabase**
- ⚡ **Render**
- ⚡ **Netlify**
- ⚡ [Weather API](https://www.weatherapi.com)

---

## Requirements ❗️

| Package | Version |
|---------|---------|
| NodeJS | `22.11.0` |
| ExpressJS | `^4.21.2` |
| Axios | `^1.7.9` |
| Dotenv | `^16.4.7` |
| PG | `^8.13.1` |
| React | `^19.0.0` |
| ReactDOM | `^19.0.0` |
| Jest | `^29.7.0` (dev dependency) |
| Supertest | `^7.0.0` (dev dependency) |
| PG Format | `^1.0.4` (dev dependency) |

---

## 🧑‍💻 Installation

1. **Fork & Clone** the repository.
2. **Create a Supabase account** and save your **database password**.
3. **Get your database connection**:  
   - In Supabase, click on **Connect** → Copy the **Database Connection URL** under **Transaction Pooler**.
4. **Install Backend Dependencies**  
   ```sh
   cd backend
   npm install
   ```
5. **Install Frontend Dependencies**  
   ```sh
   cd ../frontend
   npm install
   ```
6. **Set Up Environment Variables**  
   - In the **root** directory, create a `.env.production` file:  
     ```env
     DATABASE_URL=your_database_url_here
     ```
   - In the **root** directory, create a `.env.api` file:  
     ```env
     API_KEY=your_api_key_here
     ```
7. **Seed the Database**  
   ```sh
   cd backend
   npm run seed
   ```
8. **Run Tests** (optional)  
   ```sh
   npm test integrations.test.js
   ```

---

## 🏠 How to Run Locally

1. Open **frontend** and in `.env` remove or comment out `BACKEND_URL`.
2. Start the backend:  
   ```sh
   cd backend
   npm run server
   ```
3. Start the frontend:  
   ```sh
   cd frontend
   npm run dev
   ```

---

## 🌍 Deployment

### 🚀 Deploy Backend (Render)
> [!CAUTION]
> Before proceeding to backend deployment steps, make sure to go through the explanation of [noSleep.js](#nosleepjs) file
1. **Create a [Render](https://render.com) Account** → Click **New Web Service**.
2. Connect your **GitHub repository**.
3. Set **Root Directory** to `backend`.
4. Set **Start Command**:  
   ```sh
   yarn start
   ```
5. Add **Environment Variables** (`DATABASE_URL` and `API_KEY`).
6. Click **Deploy Web Service** and copy your backend URL.

### 🚀 Deploy Frontend (Netlify)
1. Open `frontend/.env` and set:  
   ```env
   VITE_BACKEND_URL=your_render_backend_url_here
   ```
2. Go to the [Netlify](https://www.netlify.com) and create a new account or sign in to existing one
3. Set up your team and create a new project, connect your GitHub account
4. **Install Netlify CLI**
   ```
   npm install netlify-cli -g
   ```
6. **Build the Frontend**  
   ```sh
   cd frontend
   npm run build
   ```
7. **Deploy with Netlify CLI**  
   ```sh
   netlify deploy --prod
   ```

---

## 📂 Project Structure

```
📦 myWeather
 ┣ 📂 backend
 ┃ ┣ 📂 __tests__  # Integration tests
 ┃ ┣ 📂 api        # Backend controllers & models
 ┃ ┣ 📂 config     # Database & API config
 ┃ ┣ 📂 data       # Seed & test data
 ┃ ┣ 📜 index.js   # Server entry file
 ┣ 📂 frontend
 ┃ ┣ 📂 src        # React components
 ┃ ┣ 📜 App.jsx    # Main App Component
 ┣ 📜 README.md    # This file
```

---

## `noSleep.js` 🛑

`noSleep.js` prevents **Render's free plan** from **spinning down** the backend due to inactivity. It makes a request to itself every **2 minutes**.  

If using a **paid plan** or a different hosting provider **without this limitation**, you can:
- Delete `noSleep.js` from `backend/`.
- Remove `noSleep.js` imports from `backend/api/index.js`.

---

## 📝 License

This project is **MIT Licensed**.  
