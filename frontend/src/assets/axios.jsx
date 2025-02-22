import axios from "axios"
const domain = import.meta.env.VITE_DOMAIN
const axiosRequest = axios.create({
    baseURL: domain
})
export default axiosRequest