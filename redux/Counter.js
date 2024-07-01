import React, { useEffect } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import { decrease, increase, refresh } from "./Slice"

export const Counter = ()=>{
    // useSelector initial değeri çeker
    // useDispatch güncellemek için kullanılır fonksiyonlarımızı kullandırmaya yarar parametre verevek
    const counter = useSelector((state)=>state.counter) // counter yazılarının eşleşmesi gerek slice ve storedeki yerler ile
    const dispatch= useDispatch();

    React.useEffect(()=>{
        console.log(counter)
    },[])

    return(
        <View style={{
            backgroundColor:"grey",
            borderRadius:30,
            width:300,
            height:300,
            justifyContent:"center",
            alignItems:"center"
            }}>
                <Text>{counter.count}</Text>
                <Buttons text={"Increase"} onPress={()=> dispatch(increase())}/>
                <Buttons text={"Decrase"} onPress={()=> dispatch(decrease())}/>
                <Buttons text={"Refresh"} onPress={()=> dispatch(refresh())}/>

        </View>
    )
}

const Buttons=({text,onPress})=>{
    return(
        <TouchableOpacity 
        
         onPress={()=>onPress()}
         style={{
            backgroundColor:"black",
            width:90,
            height:40,
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center",
            margin:3
        }}>
            <Text style={{color:"white"}}>{text}</Text>

        </TouchableOpacity>
    )
}