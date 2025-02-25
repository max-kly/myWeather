const noSleep = require('../noSleep.js')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const { health, getCities, getAllCities } = require('./controllers/internal.controller.js')
const { getWeather } = require('./controllers/external.controller.js')
app.use(cors());
app.get('/api/health', health)
app.get('/api/cities', getAllCities)
app.get('/api/cities/:city', getCities)
app.get('/api/weather', getWeather)

app.listen(port, () => {
    console.log('API is listening to port 3000')
})
app.use((err, request, response, next) => {
    if(err.status === 403) {
        response.status(403).send({msg: 'Invalid or expired API key'})
    }
    else {
        response.status(err.status).send(err.statusText)
    }
})
noSleep()
module.exports = app