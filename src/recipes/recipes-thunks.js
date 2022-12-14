import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './recipes-service'
import {findRecipeById} from "./recipes-service";

export const findAllRecipesThunk = createAsyncThunk(
    'findAllRecipes', async () =>
        await service.findAllRecipes()
)

export const findAllLikedRecipesForUserThunk = createAsyncThunk(
    'findAllLikedRecipesForUser', async (uid) =>
        await service.findAllLikedRecipesForUser(uid)
)

export const findAllCommentedRecipesForUserThunk = createAsyncThunk(
    'findAllCommentedRecipesForUser', async (uid) =>
        await service.findAllCommentedRecipesForUser(uid)
)

export const updateRecipeThunk = createAsyncThunk(
    'updateRecipe', async (recipe) =>
        await service.updateRecipe(recipe)
)

export const createRecipeThunk = createAsyncThunk(
    'createRecipe', async (newRecipe) => {
        return await service.createRecipe(newRecipe.newRecipe, newRecipe.uID)
    }
)
export const findRecipeByIdThunk = createAsyncThunk(
    'findRecipeById', (rId) => findRecipeById(rId)
)
export const deleteRecipeThunk = createAsyncThunk(
    'deleteRecipe', async(rId) => {
        await service.deleteRecipe(rId)
        return rId
    }
)

export const findRecipeByDishIdThunk = createAsyncThunk(
    'findRecipeByDishId', async(did) =>{
        console.log(did)
        await service.findRecipeByDishId(did)
        return did
    }
)