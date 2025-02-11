const { fetchWeather } = require('../models/external.model.js')
const getWeather = (request, response, next) => {
    fetchWeather(request.query.lat, request.query.lng)
        .then((data) => {
            response.status(200).send(data)
        })
        .catch((err) => {
            next(err)
        })
}
module.exports = { getWeather }