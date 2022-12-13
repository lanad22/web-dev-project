import axios from "axios"
const BASE_URL = 'https://the-food-network.onrender.com'
//const BASE_URL = 'http://localhost:4000'
const api = axios.create({withCredentials: true});

export const findAllUsers = async () => {
    const response = await api.get('http://localhost:4000/users')
    return response.data
}

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/api/auth/signup`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/api/auth/login`, user)
    return response.data;
}

export const profile = async () => {
    const response = await api.get(`${BASE_URL}/api/auth/profile`)
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${BASE_URL}/api/auth/logout`)
    return response.data
}

export const deleteUser = async (uid) => {}

export const editProfile = async (user_) => {

}