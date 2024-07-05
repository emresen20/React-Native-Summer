import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
//Store havuz gibidir Slice ise havuzun suyu
export const Store = configureStore({
    reducer:{
        auth: Slice.reducer
    }
})