import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice"
import diet from "../features/dietSlice"
import muscle from "../features/muscleSlice"
import product from "../features/productSlice"

export const store = configureStore({
    reducer:{
        application,
        diet,
        muscle,
        product,
    }
})