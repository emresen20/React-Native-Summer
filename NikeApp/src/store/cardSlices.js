import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    deliveryFee:15,
    freeDeliveryFrom:200
};

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem: (state,action)=>{
            const newProduct=action.payload.product;
            const cartItem= state.items.find( 
                (item) => item.product.id === newProduct.id
            ); // eğer aynı ürünse quantititysini arttırdık değilse 1 er 1er koydurduk
            if(cartItem){
                cartItem.quantity +=1;
                
            }else{
                state.items.push({product: newProduct,quantity:1}); //ifadesiyle, yeni ürünü ve miktarını (quantity) 1 olarak state.items listesine ekler.
            }
            
        },

        changeQuantity: (state,action) =>{
            
        },
    }
})