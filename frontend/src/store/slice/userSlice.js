import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        role: "",
        userData: null,
        status: false
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
        }
    }
})

export default user.reducer;
export const { setRole, setUser,setStatus } = user.actions;