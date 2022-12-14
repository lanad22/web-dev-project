import {createSlice} from "@reduxjs/toolkit";
import {
    profileThunk,
    logoutThunk,
    findAllUsersThunk,
    loginThunk,
    registerThunk,
    editProfileThunk,
    findUserByIdThunk
} from "./user-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        currentUser: null,
        error: null,
        searchedUser: null,
    },
    reducers: {
    },
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.searchedUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [editProfileThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            console.log("!!")
            state.currentUser = action.payload
            console.log(state.currentUser)
            console.log("!zz")

        },
    }
})

export default usersReducer.reducer