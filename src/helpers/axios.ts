import axios from "axios"

const api = axios.create({
    baseURL: 'https://api-workshop-8d2f.onrender.com'
})

export default api
