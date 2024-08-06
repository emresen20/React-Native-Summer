import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:null,
    password:null,
    isLoading:false,
    isAuth:false,
    users:{
        userEmail:"emreium@gmail.com",
        userPassword:"123456789"
    }
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
        },
        setIsAuth:(state,action)=>{
            state.isAuth=action.payload
        },
        setLogin:(state,action)=>{
            if((state.email===state.users.userEmail) && (state.password===state.users.userPassword)){
                state.isLoading=true
                state.isAuth=true
            }else{
                console.warn("giriş başarısız")
                
            }

        }
    }
})

export const {setEmail,setPassword,setIsLoading,setIsAuth,setLogin}= userSlice.actions;  //fonksiyonların dışarı aktarımı
export default userSlice.reducer; // bu exportlar sabit yazılmalı