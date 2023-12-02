import { createSlice } from "@reduxjs/toolkit";


const teacherSlice = createSlice({
    name: "teacher",
    initialState: {

        IDBRequest: null,
        totalAssignment: null,


    },
    reducers: {
        setAssignList: (state, action) => {
            let newList = [action.payload, ...state.totalAssignment];
            state.totalAssignment = newList;
        },
        setManyAssignList: (state, action) => {
            state.totalAssignment = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        }
    }
})


export default teacherSlice.reducer;
export const { setAssignList, setId, setManyAssignList } = teacherSlice.actions;