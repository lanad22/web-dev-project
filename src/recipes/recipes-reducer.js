import { createSlice } from "@reduxjs/toolkit";
import {findAllRecipesThunk, createRecipeThunk, findRecipeByIdThunk, deleteRecipeThunk} from "./recipes-thunks";

const initialState = {
    recipes: [],
    loading: false,
    searchedRecipe: null,
}
const recipesReducer = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: {
        [findAllRecipesThunk.fulfilled]:
            (state, action) => {
                state.recipes = action.payload
            },
        [findRecipeByIdThunk.fulfilled]:
            (state,{payload}) => {
                state.searchedRecipe = payload
            },
        [createRecipeThunk.fulfilled]:
            (state,action) => {
            state.recipes.unshift(action.payload)
            },
        [deleteRecipeThunk.fulfilled]:
            (state, {payload}) => {
            state.recipes = state.recipes.filter(r => r._id !== payload)
            }
    }
})
export default recipesReducer.reducer;
