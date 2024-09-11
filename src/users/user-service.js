import axios from "axios"
const BASE_URL = 'https://web-dev-project-node.fly.dev'
//const BASE_URL = 'http://localhost:4000'
const api = axios.create({withCredentials: true});

export const findAllUsers = async () => {
    const response = await api.get(`${BASE_URL}/api/users`)
    return response.data
}

export const findUserById = async (uid) => {
    const response = await axios.get(`${BASE_URL}/api/users/${uid}`);
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

export const editProfile = async (user) => {
    console.log(user)
    const response = await api.put(`${BASE_URL}/api/users/${user._id}`, user)
    console.log(response)
    return response.data;
}