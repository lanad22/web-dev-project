import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './cookbook-service'
import {getCookBookForUser} from "./cookbook-service";

export const addToCookbookThunk = createAsyncThunk(
    'findAllRecipes', async (rid) =>
        await service.addToCookbook(rid)
)

export const getCookBookForUserThunk = createAsyncThunk(
    'getCookBookForUser', async (uid) =>
        await service.getCookBookForUser(uid)
)
