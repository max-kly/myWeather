const dataLon = require('../../data/dataLon')
const dataLondon = require('../../data/dataLondon')
const request = require('supertest')
const app = require('../api/index')

describe('/api/health tests:', () => {
    test('GET 200: Responds with "Server is running" if server is OK', () => {
        return request(app)
            .get('/api/health')
            .expect(200)
            .then(({ body }) => {
                expect(body.message).toBe('Server is running')
            })
    })
})
describe('/api/cities tests:', () => {
    test('GET 200: Responds with all cities from the database', () => {
        request(app)
            .get('/api/cities')
            .expect(200)
            .then(({ body }) => {
                expect(body.length).toBe(47868)
            })
    })
})
describe('/api/cities/:city tests:', () => {
    test('GET 200: Responds with an array of cities that start from passed parameter', () => {
        return request(app)
            .get('/api/cities/lon')
            .expect(200)
            .then(({ body }) => {
                expect(body.cities).toEqual(dataLon)
            })
    })
    test('GET 200: Responds with an array of correct cities', () => {
        return request(app)
            .get('/api/cities/london')
            .expect(200)
            .then(({ body }) => {
                expect(body.cities).toEqual(dataLondon)
            })
    })
    test('GET 200: Response contains id, lat and lng', () => {
        return request(app)
            .get('/api/cities/london')
            .expect(200)
            .then(({ body }) => {
                expect(body.cities[0]).toHaveProperty('id')
                expect(body.cities[0]).toHaveProperty('lat')
                expect(body.cities[0]).toHaveProperty('lng')
            })
    })
    test('GET 200: Response is case insensitive and we get a full list', () => {
        return request(app)
            .get('/api/cities/LoNdon')
            .expect(200)
            .then(({ body }) => {
                expect(body.cities).toEqual(dataLondon)
            })
    })
})
describe('/api/weather endpoint tests:', () => {
    test('GET 200: Responds with an object that contains a correct location', () => {
        return request(app)
            .get('/api/weather?lat=51.5072&lng=-0.1275')
            .expect(200)
            .then(({ body }) => {
                expect(body.location.name).toBe('London')
            })
    })
    test('GET 200: Responds with a current and forecast keys', () => {
        return request(app)
            .get('/api/weather?lat=51.5072&lng=-0.1275')
            .expect(200)
            .then(({ body }) => {
                expect(body).toHaveProperty('current')
                expect(body).toHaveProperty('forecast')
            })
    })
    test('GET 400: Responds with 400 and bad request message for invalid LAT and LNG', () => {
        return request(app)
            .get('/api/weather?lat=&lng=')
            .expect(400)
            .then((response) => {
                expect(response.error.text).toBe('Bad Request')
            })
    })
    test.skip('GET 403: Catches 403 for invalid API key', () => {
        return request(app)
            .get('/api/weather?lat=51.5072&lng=-0.1275')
            .expect(403)
            .then(({ body }) => {
                expect(body.msg).toBe('Invalid or expired API key')
            })
    })
})