import { backend_url } from "./backend_url"
import axios from "axios"
const domain = backend_url || import.meta.env.VITE_DOMAIN
const axiosRequest = axios.create({
    baseURL: domain
})
export default axiosRequest