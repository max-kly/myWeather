const format = require('pg-format')
const data = require('./cities.js')
const db = require('../config/connection.js')

const seed = (data) => {
    return db
        .query('DROP TABLE cities IF EXISTS;')
        .then(() => {
            return db.query(`CREATE TABLE cities (
            id INT SERIAL PRIMARY KEY,
            lat VARCHAR(255),
            lng VARCHAR(255),
            city VARCHAR(255),
            country VARCHAR(255))`)
        })
        .then(() => {
            const formattedCities = data.map((city) => {
                return [city.lat, city.lng, city.city, city.country]
            })
            const query = format('INSERT INTO cities (lat, lng, city, country) VALUES %L', formattedCities)
            return db.query(query)
        })
        .then(() => {
            db.end()
        })
}
seed(data)