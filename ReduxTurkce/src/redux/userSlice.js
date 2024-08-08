import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getAuth,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login=createAsyncThunk('user/login',async({email,password})=>{ //cevap beklediğimiz verilerde bunu kullanıyoruz zaman gerektiren olaylarda
    //yukarıdaki user/login reducerdeki userdan geldiimizi söyler login dev zaten fonksiyonun adıdır
    try{
        const auth= getAuth();
        const userCredential= await signInWithEmailAndPassword(auth,email,password)
        const user = userCredential.user;
        const token= user.stsTokenManager.accessToken;

        const userData={
            token,
            user:user
        }
       
         if (token) { // token'ın null/undefined olmadığını kontrol et
             await AsyncStorage.setItem("userToken", token);
         } else {
             throw new Error("Token is undefined");
         }


        return userData
    }catch(error){
        console.log("userSlice 17 line",error)
        throw error

    }
})

//kullanıcı otomatik giriş işlemleri

export const autologin=createAsyncThunk('user/autologin',async()=>{
    try{
        const token=await AsyncStorage.getItem("userToken") // yukarıda set ederkenki değerdeki ismin aynısı olması gerekir
        console.log("token",token)
        if(token){
            return token
        }else{
            throw new Error("Token is undefined");
        }
    }catch(error){
        throw error
    }
})

// kullanıcı çıkış işlemler,

export const logout= createAsyncThunk('user/logout',async()=>{
    try{
        const auth =getAuth()
        await signOut(auth)

        await AsyncStorage.removeItem("userToken")
        return null;


    }catch(error){
        throw error
    }
})

// Kullanıcı kayıt işlemleri

export const register=createAsyncThunk('user/register',async({email,password})=>{
    try{
        
        const auth=getAuth()
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        const user=userCredential.user
        const token=user.stsTokenManager.accessToken

        await sendEmailVerification(user)
        await AsyncStorage.setItem("userToken",token)
        return token
    }catch(error){
        throw error

    }
})




const initialState={
    email:null,
    password:null,
    isLoading:false,
    isAuth:false,
    token:null,
    user:null,
    error:null,
   
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
    },
    extraReducers:(builder)=>{ // cevap beklediğimiz verilerde bunu kullanıyoruz yükleniyor
        builder
        .addCase(login.pending,(state)=>{
            state.isLoading= true;
            state.isAuth=false
        }) //logini dinliyoruz asynthubk için 3 yapı kurulur başarıyla sonuçlandı
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isAuth=true;
            state.user=action.payload.user;//action.payload burada userDataya eşit oluyor
            state.token=action.payload.token //başarılıda payload
        }) //başarı ile sonuçlandı sonrasında neler yapılacak
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false;
            state.isAuth=false;
            state.error=action.error.message; //başarısızda error döndü
        }) // başarısız oldu

        .addCase(autologin.pending,(state)=>{
            state.isLoading=true
            state.isAuth=false
        })  
        .addCase(autologin.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isAuth=true;
            state.token=action.payload //yukarıda yazılan payloadda retrunde 1 tane varsa action.payloada eşit olur
        })
        .addCase(autologin.rejected,(state,action)=>{
            state.isLoading=false;
            state.isAuth=false;
            state.token=false

        })
        .addCase(logout.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(logout.fulfilled,(state)=>{
            state.isLoading=false;
            state.isAuth=false;
            state.token=null;
            state.error=null
        })
        .addCase(logout.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload
        })
        .addCase(register.pending,(state)=>{
            state.isLoading=true;
            state.isAuth=false
        })
        .addCase(register.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isAuth=true;
                state.token=action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false;
            state.isAuth=false;
            state.error="invalid email or password"
        })
    }
})

export const {setEmail,setPassword,setIsLoading,setIsAuth}= userSlice.actions;  //fonksiyonların dışarı aktarımı
export default userSlice.reducer; // bu exportlar sabit yazılmalı