import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    assignmentList: []
}

const data = createSlice({
    name: "data",
    initialState,
    reducers: {

        addAssignments: (state, action) => {
            state.assignmentList = action.payload;
        },
        addSingleAssignments: (state, action) => {
            state.assignmentList = [action.payload, ...state.assignmentList];
        }

    }
})


export default data.reducer;
export const {addAssignments,addSingleAssignments}=data.actions;