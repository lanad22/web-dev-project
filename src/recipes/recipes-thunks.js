import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './recipes-service'

export const findAllRecipesThunk = createAsyncThunk(
    'findAllRecipes', async () =>
        await service.findAllRecipes()
)
export const createRecipeThunk = createAsyncThunk(
    'createRecipe', async () =>
        await service.createRecipe()
)