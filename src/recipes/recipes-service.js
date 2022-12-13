import axios from 'axios';
//const BASE_URL = 'https://the-food-network.onrender.com'
const BASE_URL = 'http://localhost:4000'
const RECIPES_API = `${BASE_URL}/api/recipes`;

export const findAllRecipes = async () => {
    const response = await axios.get(RECIPES_API);
    const recipes = response.data;
    return recipes;
}
export const findRecipeById = async (rid) => {
    console.log("********")

    const response = await axios.get(`${RECIPES_API}/${rid}`)
    console.log(response.data)
    return response.data;
}
export const createRecipe = async (newRecipe) => {
    const response = await axios.post(`${BASE_URL}/users/me/recipes`, newRecipe);
    const actualRecipe = response.data
    return actualRecipe
}
export const deleteRecipe = async (rid) => {
    const response = await axios.delete(`${RECIPES_API}/${rid}`)
    return response.data
}