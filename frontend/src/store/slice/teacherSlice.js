import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
    name: "student",
    initialState: {
        assignList: [],


    },
    reducers: {
        setAssignList: (state, action) => {
            state.assignList = [action.payload, ...state.assignList];
        }
    }
})


export default studentSlice.reducer;
export const { setAssignList } = studentSlice.actions;