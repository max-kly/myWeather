const axios = require('axios')
const key = require('../../config/apiKey')
const fetchWeather = (lat, lng, next) => {
    return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${lat},${lng}&days=10&aqi=yes&alerts=yes`)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            return Promise.reject(err.response)
        })
}
module.exports = { fetchWeather }