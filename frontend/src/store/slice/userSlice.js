import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        role: "",
        userData: null,
        status: false,
        token: null
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setUser: (state, action) => {
            state.userData = action.payload;
        },
        setStatus: (state, action) => {
            state.status = true;
        },
        removeStatus: (state, action) => {
            state.status = false;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setLocallyToken: (state, action) => {
            localStorage.setItem('token', JSON.stringify(state.token));

        },
        removeToken: (state, action) => {
            state.token = null;
        },
        removeFromStorage: (state, action) => {
            localStorage.removeItem('token');
        }
    }
})

export default user.reducer;
export const { setRole, setUser, setStatus, removeStatus, setToken, removeToken, removeFromStorage, setLocallyToken } = user.actions;