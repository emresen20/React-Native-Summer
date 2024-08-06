import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:null,
    password:null,
    isLoading:false
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        //burada state initialStateyi ifader eder 
        //dışarıdan gelen veriyi içi doldurulan veriyi ifade eder
        //yani burada initial stateye dışarıdan gelecek olan action.payload ile doldurduk
        setEmail:(state,action)=>{
            // const loverCaseEmail=action.payload.toLowerCase() bunu action.payload yerine yazarsak harfleri küçültür
            state.email=action.payload

        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
        setIsLoading:(state,action)=>{
            state.isLoading=action.payload
        }
    }
})

export const {setEmail,setPassword,setIsLoading}= userSlice.actions;  //fonksiyonların dışarı aktarımı
export default userSlice.reducer; // bu exportlar sabit yazılmalı