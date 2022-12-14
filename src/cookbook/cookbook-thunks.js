import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './cookbook-service'

export const addToCookbookThunk = createAsyncThunk(
    'findAllRecipes', async (rid) =>
        await service.addToCookbook(rid)
)

