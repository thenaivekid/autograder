import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";



const store = configureStore({
    reducer: {
        role: userSlice
    }
})


export default store;
export * from "./slice/userSlice"