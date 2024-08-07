import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice" // import ederken belli kalıplara uyması için böyle yapılıyor
import { thunk } from "redux-thunk"; // non seriable hatawsı için install edilmesi gereken yapı
export const store=configureStore({
    reducer:{
        user:UserReducer
    },
    middleware:(getDefaultMiddlware) => getDefaultMiddlware({serializableCheck:false})
})