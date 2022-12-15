import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './recipes-service'
import {findRecipeById} from "./recipes-service";

export const findCommentsForRecipeThunk = createAsyncThunk(
    'findCommentsForRecipe', async (rid) =>
        await service.findCommentsForRecipe(rid)
)

export const addCommentThunk = createAsyncThunk(
    'addComment', async (item) =>
        await service.addComment(item)
)

export const findAllRecipesThunk = createAsyncThunk(
    'findAllRecipes', async () =>
        await service.findAllRecipes()
)

export const isRecipeLikedByUserThunk = createAsyncThunk(
    'isRecipeLikedByUser', async (item) =>
        await service.isRecipeLikedByUser(item.rid, item.uid)
)

export const isRecipeBookmarkedByUserThunk = createAsyncThunk(
    'isRecipeBookmarkedByUser', async (item) =>
        await service.isRecipeBookmarkedByUser(item.rid, item.uid)
)

export const likeRecipeThunk = createAsyncThunk(
    'likeRecipe', async (item) => {
        await service.likeRecipe(item.rid, item.uid)
    }
)

export const dislikeRecipeThunk = createAsyncThunk(
    'dislikeRecipe', async (item) => {
        await service.dislikeRecipe(item.rid, item.uid)
    }
)

export const bookmarkRecipeThunk = createAsyncThunk(
    'bookmarkRecipe', async (item) => {
        await service.bookmarkRecipe(item.rid, item.uid)
    }
)

export const unbookmarkRecipeThunk = createAsyncThunk(
    'unbookmarkRecipe', async (item) => {
        await service.unbookmarkRecipe(item.rid, item.uid)
    }
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
        await service.findRecipeByDishId(did)
        return did
    }
)

export const findAllRecipesByUserThunk = createAsyncThunk(
    'findAllRecipesByUser', async (uID) => {
        return await service.findAllRecipesByUser(uID)
    }
)