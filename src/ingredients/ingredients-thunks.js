import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './ingredients-service'

export const uploadIngredientsThunk = createAsyncThunk(
    'createRecipe', async (item) => {
        return await service.uploadIngredients(item)
    }
)