import { createSlice } from "@reduxjs/toolkit";


const teacherSlice = createSlice({
    name: "teacher",
    initialState: {
        teacherAssignmets: [],
        id: null,
        allAssgnments: []



    },
    reducers: {
        setAssignList: (state, action) => {
            if (!action.payload) {
                const reversed = state.teacherAssignmets.slice().reverse();
                state.allAssgnments = [...reversed];

            } else {
                state.allAssgnments = [action.payload, ...state.allAssgnments]
            }


        },
        setManyAssignList: (state, action) => {

            state.teacherAssignmets = [...action.payload];
        },
        setId: (state, action) => {
            state.id = action.payload;
        }
    }
})


export default teacherSlice.reducer;
export const { setAssignList, setId, setManyAssignList } = teacherSlice.actions;