import axios from "axios"
const backend_url = import.meta.env.VITE_BACKEND_URL
const localhost = import.meta.env.VITE_LOCALHOST_BACKEND
const domain = backend_url || localhost
const api = axios.create({
    baseURL: domain,
    timeout: 6000,
})
export const fetchCities = (searchQuery) => {
    return api.get(`api/cities/${searchQuery}`)
        .then(({ data: { cities } }) => {
            return cities
        })
}
export const fetchWeather = (lat, lng) => {
    return api.get(`/api/weather?lat=${lat}&lng=${lng}`)
        .then(({ data }) => {
            return data
        })
}