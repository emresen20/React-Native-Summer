import { createSlice } from "@reduxjs/toolkit";


const Slice =createSlice({
    name:"dictionary",
    initialState:[
        {
            en:"Computer",
            tr:"Bilgisayar",
        },
        {
            en:"Money",
            tr:"Para",
        },
        {
            en:"Clock",
            tr:"Saat",
        },
       
    ],
    reducers:{
        add(state,action){
            console.log("state",state)
            const word=action.payload;
            state.push(word)
            
        }
    }
    
});

export default Slice

export const {add} = Slice.actions