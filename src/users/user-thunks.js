import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register, login, logout, profile, editProfile, findUserById} from "./user-service";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await findUserById(uid)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)
export const editProfileThunk = createAsyncThunk(
    'editProfile',
    async (user) => await editProfile(user)
)