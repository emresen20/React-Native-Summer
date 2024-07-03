import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState={
    products:products,
    selectedProduct:null, // hangi üründe olduğumuzu bulmak için açtık 
};
export const prodcutsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setSelectedProduct:(state,action) =>{
            console.log
            const productId=action.payload;  //product screen den gelen id 
            state.selectedProduct =state.products.find((p)=> p.id === productId) //products listesini 
            // tarayarak id'si 
            //productId'ye eşit olan ilk ürünü bulur ve selectedProduct state'ine atar.
        }
    }

})