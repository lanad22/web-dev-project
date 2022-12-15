import { createSlice } from "@reduxjs/toolkit";
import {
    findIngredientsThunk,
    uploadIngredientsThunk

} from "./ingredients-thunks";

const initialState = {
    ingredients: [],
    found: {},
    uploaded: false
}
const ingredientsReducer = createSlice({
    name: 'ingredients',
    initialState,
    extraReducers: {
        [uploadIngredientsThunk.fulfilled]:
            (state, action) => {
                state.ingredients.push(action.payload)
                state.uploaded = true
            },
        [findIngredientsThunk.fulfilled]:
            (state, action) => {
                state.found = action.payload
            }
    }
})
export default ingredientsReducer.reducer;

