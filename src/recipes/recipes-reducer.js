import { createSlice } from "@reduxjs/toolkit";
import {
    findAllRecipesThunk,
    createRecipeThunk,
    findRecipeByIdThunk,
    deleteRecipeThunk,
    findRecipeByDishIdThunk,
    isRecipeLikedByUserThunk,
    updateRecipeThunk,
    dislikeRecipeThunk,
    likeRecipeThunk,
    isRecipeBookmarkedByUserThunk,
    unbookmarkRecipeThunk, bookmarkRecipeThunk
} from "./recipes-thunks";

const initialState = {
    recipes: [],
    loading: false,
    isLiked: false,
    isBookmarked: false,
    searchedRecipe: {}
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
            (state,action) => {
                state.searchedRecipe = action.payload
            },
        [createRecipeThunk.fulfilled]:
            (state,action) => {
            state.recipes.unshift(action.payload)
            },
        [deleteRecipeThunk.fulfilled]:
            (state, {payload}) => {
            state.recipes = state.recipes.filter(r => r._id !== payload)
            }
        ,
        [findRecipeByDishIdThunk.fulfilled]:
            (state, action) => {
                state.recipes = state.recipes.filter(r => r.dishId === action.payload)
            },
        [updateRecipeThunk.fulfilled]:
            (state,action) => {
                state.searchedRecipe = action.payload
            },
        [isRecipeLikedByUserThunk.fulfilled]:
            (state, action) => {
                state.isLiked = action.payload;
            },
        [dislikeRecipeThunk.fulfilled]:
            (state,action) => {
                state.isLiked = false
            },
        [likeRecipeThunk.fulfilled]:
            (state,action) => {
                state.isLiked = true
            },
        [isRecipeBookmarkedByUserThunk.fulfilled]:
            (state, action) => {
                state.isBookmarked = action.payload;
            },
        [unbookmarkRecipeThunk.fulfilled]:
            (state,action) => {
                state.isBookmarked = false
            },
        [bookmarkRecipeThunk.fulfilled]:
            (state,action) => {
                state.isBookmarked = true
            }
    }
})
export default recipesReducer.reducer;
