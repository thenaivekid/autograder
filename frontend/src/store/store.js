import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { api } from "./api/api";



const store = configureStore({
    reducer: {
        role: userSlice,

        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)

})


export default store;
export * from "./slice/userSlice"
export * from "./api/api"