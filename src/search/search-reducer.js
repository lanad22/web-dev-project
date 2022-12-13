import { createSlice } from "@reduxjs/toolkit";
import {findAllResultsThunk, findResultByIdThunk, findTrendingResultThunk} from './search-thunks';

const initialState = {
    results: [],
    detail: {}
}
const resultsReducer = createSlice({
    name: 'results',
    initialState,
    extraReducers: {
        [findAllResultsThunk.fulfilled]:
            (state, action) => {
                state.results = action.payload
            },
        [findResultByIdThunk.fulfilled]:
            (state,action) => {
                state.detail = action.payload
            },
        [findTrendingResultThunk.fulfilled]:
            (state,action) => {
                state.results = action.payload
            }
    }
})
export default resultsReducer.reducer;