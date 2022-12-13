import {createAsyncThunk} from "@reduxjs/toolkit"
import {findResultById, findAllResults, findTrendingResult} from "./search-service";

export const findAllResultsThunk = createAsyncThunk(
    'findAllResults', (query) => findAllResults(query)
)

export const findResultByIdThunk = createAsyncThunk(
    'findResultById', (rId) => findResultById(rId)
)
export const findTrendingResultThunk = createAsyncThunk(
    'findTrendingResult', () => findTrendingResult()
)