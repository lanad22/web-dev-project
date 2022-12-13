import axios from 'axios';
const SEARCH_URL = 'https://api.spoonacular.com/recipes'
const KEY = '3857cfd46a694bcba671969e6bf77753';

export const findAllResults = async (query) => {
    const response = await axios.get(`${SEARCH_URL}/complexSearch?apiKey=${KEY}&query=${query}&number=6`);
    console.log(response.data);
    const results = response.data;
    return results;
}
export const findResultById = async (rid) => {
    const response = await axios.get(`${SEARCH_URL}/${rid}/information?apiKey=${KEY}&includeNutrition=false`)
    return response.data;
}
export const findTrendingResult = async() => {
    const response = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=3857cfd46a694bcba671969e6bf77753&number=3&tags=christmas')
    console.log(response.data);
    return response.data;
}
