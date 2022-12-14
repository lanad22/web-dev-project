import { createSlice } from "@reduxjs/toolkit";
import {addToCookbookThunk} from "./cookbook-thunks";

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
    }
})
export default cookbookReducer.reducer;
