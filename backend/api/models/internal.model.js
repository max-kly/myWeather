const db = require('../../config/connection')
const fetchCities = (city) => {
    const text = 'SELECT * FROM cities WHERE LOWER(city) LIKE LOWER($1)'
    const value = [`${city}%`]
    return db.query(text, value)
    .then((cities) => {
        return cities
    })
}
const fetchAllCities = () => {
    return db.query('SELECT * FROM cities')
    .then((cities) => {
        return cities
    })
}
module.exports = { fetchCities, fetchAllCities }