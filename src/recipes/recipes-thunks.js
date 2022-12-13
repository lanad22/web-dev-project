import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './recipes-service'
import {findRecipeById} from "./recipes-service";

export const findAllRecipesThunk = createAsyncThunk(
    'findAllRecipes', async () =>
        await service.findAllRecipes()
)
export const createRecipeThunk = createAsyncThunk(
    'createRecipe', async (newRecipe) => {
        return await service.createRecipe(newRecipe)
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