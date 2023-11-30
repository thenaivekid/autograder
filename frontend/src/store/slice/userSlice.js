import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        role: ""
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        }
    }
})

export default user.reducer;
export const {setRole } = user.actions;