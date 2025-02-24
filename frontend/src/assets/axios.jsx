import axios from "axios"
const backend_url = import.meta.env.VITE_BACKEND_URL
const localhost = import.meta.env.VITE_LOCALHOST_BACKEND
const domain = backend_url || localhost
const axiosRequest = axios.create({
    baseURL: domain,
    timeout: 6000,
})
export default axiosRequest