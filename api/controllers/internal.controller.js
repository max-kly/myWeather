const { fetchCities, fetchAllCities } = require('../models/internal.model.js')
const health = (request, response) => {
    response.status(200).send({ message: 'Server is running' })
}
const getCities = (request, response) => {
    const { city } = request.params
    fetchCities(city)
        .then(({ rows }) => {
            response.status(200).send({ cities: rows })
        })
        .catch((err) => {
            console.log(err)
        })
}
const getAllCities = (request, response) => {
    fetchAllCities()
        .then(({ rows }) => {
            response.status(200).send({ cities: rows })
        })
}
module.exports = { health, getCities, getAllCities };