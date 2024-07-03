import { configureStore } from "@reduxjs/toolkit";
import { prodcutsSlice } from "./productsSlice";


export const store =configureStore({
    reducer:{
        products:prodcutsSlice.reducer
    }
})