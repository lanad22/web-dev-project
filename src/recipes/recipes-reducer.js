import { createSlice } from "@reduxjs/toolkit";
import {findAllRecipesThunk, createRecipeThunk} from "./recipes-thunks";

const initialState = {
    recipes: [],
    loading: false
}
const recipesReducer = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: {
        [findAllRecipesThunk.fulfilled]:
            (state, action) => {
                state.recipes = action.payload
            },
        [createRecipeThunk.fulfilled]:
            (state,action) => {
            state.recipes.push(action.payload)
            }
    }
})
export default recipesReducer.reducer;
