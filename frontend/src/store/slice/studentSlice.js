import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
    name: "student",
    initialState: {
        assignmentQuestions: null,
    },
    reducers: {
        setAssignmentQuestions: (state, actions) => {
            state.assignmentQuestions = actions.payload;
        }
    }
})

export default studentSlice.reducer;
export const { setAssignmentQuestions } = studentSlice.actions;