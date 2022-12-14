import { createSlice } from "@reduxjs/toolkit";
import {addToCookbookThunk, getCookBookForUserThunk} from "./cookbook-thunks";
import {getCookBookForUser} from "./cookbook-service";

const initialState = {
    recipes: [],
    loading: false,
    cookbook: []
}
const cookbookReducer = createSlice({
    name: 'cookbook',
    initialState,
    extraReducers: {
        [addToCookbookThunk.fulfilled]:
            (state, action) => {
                state.cookbook.push(action.payload)
            },
        [getCookBookForUserThunk.fulfilled]:
            (state, action) => {
                state.cookbook = action.payload;
            },

    }
})
export default cookbookReducer.reducer;
