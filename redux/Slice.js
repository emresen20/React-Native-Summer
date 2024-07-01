import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"counter",
    initialState:{  // global statemiz bu  (başlangıç state)
        count:0,
        author:{
            name:"Emre",
            surname:"Shen",
        }
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
        },
        setAuthor(state,action){  // fonksiyonun gelecek değeri belli değil ise action ile kullanılır
            //buradaki state initialstatedeki veriler temsil eder o yüzden state.author.name bu şekilde çağırmış oluyuorz
            // action ise güncellenmesine yarayan her zaman kullanılması gereken bir yapıdır
            const name=action.payload.name;  // payload değişecek statenin yeni bilgilerini taşır
            const surname=action.payload.surname;

            state.author.name=name;
            state.author.surname=surname;

        }
    }
})
export default Slice;
export const {decrease,increase,refresh,setAuthor} =Slice.actions