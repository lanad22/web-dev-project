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
    unbookmarkRecipeThunk, bookmarkRecipeThunk, findCommentsForRecipeThunk, addCommentThunk, findAllRecipesByUserThunk
} from "./recipes-thunks";

const initialState = {
    recipes: [],
    recipesUser: [],
    loading: false,
    isLiked: false,
    isBookmarked: false,
    searchedRecipe: {},
    comments: [],
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
                state.recipes = state.recipes.length === 0 ? JSON.parse(window.localStorage.getItem('recipes')) :state.recipes
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
            },
        [findCommentsForRecipeThunk.fulfilled]:
            (state, action) => {
                state.comments = action.payload
            },
        [addCommentThunk.fulfilled]:
            (state, action) => {
                state.comments.push(action.payload)
            },
        [findAllRecipesByUserThunk.fulfilled]:
            (state, action) => {
            state.recipesUser = action.payload
            }
    }
})
export default recipesReducer.reducer;
