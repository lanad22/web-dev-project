import axios from 'axios';
const BASE_URL = 'http://localhost:4000/api';
const RECIPES_API = `${BASE_URL}/recipes`;

export const findAllRecipes = async () => {
    const response = await axios.get(RECIPES_API);
    const recipes = response.data;
    return recipes;
}
export const createRecipe = async () => {
    const response = await axios.post(RECIPES_API);
    const newRecipe = response.data
    return newRecipe
}