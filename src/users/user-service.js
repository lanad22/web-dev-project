import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const createUser = async () => {

}

export const findAllUsers = async () => {
    const response = await axios.get('http://localhost:4000/users')
    return response.data
}

//TODO: Uncomment
export const register = async (user) => {
    //const response = await axios.post(`${BASE_URL}/register`, user)
    console.log(user)
    return user
}

//TODO: Uncomment
export const login = async (user) => {
    //const response = await axios.post(`${BASE_URL}/login`, user)
    console.log(user)
    return user
}

export const profile = async () => {
    const response = await axios.post(`${BASE_URL}/profile`)
    return response.data
}

export const logout = async () => {
//    const response = await axios.post(`${BASE_URL}/logout`)
    return {}
}

export const deleteUser = async (uid) => {}
export const updateUser = async (uid, userUpdates) => {}