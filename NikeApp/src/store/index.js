import { configureStore } from "@reduxjs/toolkit";
import { prodcutsSlice } from "./productsSlice";
import { cartSlice } from "./cardSlices";

export const store =configureStore({
    reducer:{
        products:prodcutsSlice.reducer,
        cart:cartSlice.reducer
    }
})