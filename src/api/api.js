import axios from "axios";

// axios instance (instance-ornek)
const api = axios.create({
    baseURL:"http://localhost:3004"
})

export default api