import { createSlice } from "@reduxjs/toolkit";
import {
    uploadIngredientsThunk

} from "./ingredients-thunks";

const initialState = {
    ingredient: [],
    uploaded: false
}
const ingredientsReducer = createSlice({
    name: 'ingredients',
    initialState,
    extraReducers: {
        [uploadIngredientsThunk.fulfilled]:
            (state, action) => {
                state.uploaded = true
            },
    }
})
export default ingredientsReducer.reducer;
