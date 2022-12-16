import axios from 'axios';
import {findCommentsForRecipeThunk} from "./recipes-thunks";
const BASE_URL = 'http://localhost:4000/api'
const RECIPES_API = `${BASE_URL}/recipes`;

export const findAllRecipes = async () => {
    const response = await axios.get(RECIPES_API);
    const recipes = response.data;
    return recipes;
}

export const isRecipeLikedByUser = async(rid, uid) => {
    const response = await axios.get(`${BASE_URL}/likes/${rid}/users/${uid}`)

    return response.data
}

export const bookmarkRecipe = async(rid, uid) => {
    const response = await axios.post(`${BASE_URL}/cookbook/${rid}/users/${uid}`)
    return response.data
}

export const findCommentsForRecipe = async(rid) => {
    const response = await axios.get(`${BASE_URL}/comments/${rid}`)
    return response.data
}

export const addComment = async(item) => {
    const response = await axios.post(`${BASE_URL}/comments/${item.recipe}/users/${item.postedBy}`, item)
    return response.data
}

export const unbookmarkRecipe = async(rid, uid) => {
    const response = await axios.delete(`${BASE_URL}/cookbook/${rid}/users/${uid}`)
    return response.data
}

export const isRecipeBookmarkedByUser = async(rid, uid) => {
    const response = await axios.get(`${BASE_URL}/cookbook/${rid}/users/${uid}`)
    return response.data
}

export const likeRecipe = async (rid, uid) => {
    const response = await axios.post(`${BASE_URL}/likes/${rid}/users/${uid}`)
    return response.data
}

export const dislikeRecipe = async (rid, uid) => {
    const response = await axios.delete(`${BASE_URL}/likes/${rid}/users/${uid}`)
    return response.data
}

export const findRecipeById = async (rid) => {
    const response = await axios.get(`${RECIPES_API}/${rid}`)
    return response.data;
}

export const createRecipe = async (newRecipe, uID) => {
    const response = await axios.post(`${BASE_URL}/users/${uID}/recipes`, newRecipe);
    const actualRecipe = response.data
    return actualRecipe
}

export const findAllLikedRecipesForUser = async (uid) => {
    const response = await axios.get(`${BASE_URL}/likes/users/${uid}`)
    return response.data
}

export const findAllCommentedRecipesForUser = async (uid) => {
    const response = await axios.get(`${BASE_URL}/comments/users/${uid}`)
    return response.data
}

export const deleteRecipe = async (rid) => {
    const response = await axios.delete(`${RECIPES_API}/${rid}`)
    return response.data
}

export const updateRecipe = async (recipe) => {
    const response = await axios.put(`${RECIPES_API}/${recipe._id}`, recipe)
    return response.data
}

export const findRecipeByDishId = async (did) => {
    const response = await axios.get(`${BASE_URL}/dishes/${did}/recipes`)
    return response.data
}

export const findAllRecipesByUser = async (uID) => {
    const response = await axios.get(`${BASE_URL}/users/${uID}/recipes`);
    return response.data

}

