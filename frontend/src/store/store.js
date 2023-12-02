import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { api } from "./api/api";
import teacherSlice from "./slice/teacherSlice";
import studentSlice from "./slice/studentSlice";
import dataSlice from "./slice/dataSlice";



const store = configureStore({
    reducer: {
        role: userSlice,
        teacher: teacherSlice,
        student: studentSlice,
        data: dataSlice,

        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)

})


export default store;
export * from "./slice/userSlice"
export * from "./api/api"
export * from "./slice/teacherSlice"
export * from "./slice/studentSlice"
export * from "./slice/dataSlice"