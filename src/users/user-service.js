import axios from "axios";
const BASE_URL = 'http://localhost:4000'

let user = null;

export const findAllUsers = async () => {
    const response = await axios.get('http://localhost:4000/users')
    return response.data
}

//TODO: Uncomment
export const register = async (user_) => {
    //const response = await axios.post(`${BASE_URL}/register`, user)
    user = user_
    console.log("registered")
    return user
}

//TODO: Uncomment
export const login = async (user_) => {
    //const response = await axios.post(`${BASE_URL}/login`, user)
    if(user != null) {
        if(user_.email === user.email
        && user_.password === user.password) {
            console.log("authenticated")
            return user;
        }
    }
    console.log("no auth")
    return user;
}

export const profile = async () => {
    // const response = await axios.post(`${BASE_URL}/profile`)
    return user;
}

export const logout = async () => {
//    const response = await axios.post(`${BASE_URL}/logout`)
    return {}
}

export const deleteUser = async (uid) => {}
export const editProfile = async (user_) => {
    user = user_
    return user;
}