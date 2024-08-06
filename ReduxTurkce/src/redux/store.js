import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice" // import ederken belli kalıplara uyması için böyle yapılıyor

export const store=configureStore({
    reducer:{
        user:UserReducer
    }
})