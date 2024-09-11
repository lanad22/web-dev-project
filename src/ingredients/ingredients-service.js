import axios from 'axios';
const BASE_URL = 'https://web-dev-project-node.fly.dev/api/ingredients'
//const BASE_URL = 'http://localhost:4000/api/ingredients'

export const uploadIngredients = async (newIngredient) => {
    const response = await axios.post(`${BASE_URL}`, newIngredient);
    return response.data;
}
export const findIngreients = async (name) => {
    const response = await axios.get(`${BASE_URL}?name=${name}`);
    return response.data;
}
