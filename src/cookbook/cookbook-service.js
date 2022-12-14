import axios from "axios"
//const BASE_URL = 'https://the-food-network.onrender.com'
const BASE_URL = 'http://localhost:4000'
const api = axios.create({withCredentials: true});

export const addToCookbook = async (rid) => {
    const response = await api.post(`${BASE_URL}/api/cookbook/${rid}/users/me`)
    return response.data
}

export const getCookBookForUser = async (uid) => {
    const response = await api.get(`${BASE_URL}/api/cookbook/users/${uid}`)
    return response.data
}