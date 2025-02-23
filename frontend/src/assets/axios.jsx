import axios from "axios"
const domain = import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_LOCALHOST_BACKEND
const axiosRequest = axios.create({
    baseURL: domain
})
export default axiosRequest