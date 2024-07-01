import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"counter",
    initialState:{  // global statemiz bu  (başlangıç state)
        count:0
    },
    reducers:{  // stateye etki edicek fonksiyonlar
        increase(state){
            state.count++;

        },
        decrease(state){
            state.count--;
        },
        refresh(state){
            state.count=0;
        }
    }
})
export default Slice;
export const {decrease,increase,refresh} =Slice.actions