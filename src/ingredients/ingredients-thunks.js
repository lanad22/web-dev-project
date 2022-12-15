import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './ingredients-service'

export const uploadIngredientsThunk = createAsyncThunk(
    'createIngredient', async (newIngredient) => {
        return await service.uploadIngredients(newIngredient)
    }
)

export const findIngredientsThunk = createAsyncThunk(
    'findIngredient', async (name) => {
        return await service.findIngreients(name)
    }
)
