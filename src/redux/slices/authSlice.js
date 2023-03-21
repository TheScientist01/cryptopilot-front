import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: localStorage.getItem('refreshToken') ? true : false
    },
    reducers: {
        validate: (state, action) => {
            state.isAuth = true;
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
        },
        logoutAuth: (state) => {
            state.isAuth = false;
            state.user = null;
            localStorage.clear();
        }
    },
})

export const { validate, logoutAuth } = authSlice.actions;
export const selectIsAuth = state => state.auth.isAuth;


export default authSlice;