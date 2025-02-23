import { frontend_url } from "./frontend_url"
import axios from "axios"
const domain = frontend_url || import.meta.env.VITE_DOMAIN
const axiosRequest = axios.create({
    baseURL: domain
})
export default axiosRequest