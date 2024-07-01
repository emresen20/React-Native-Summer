import { View,Text, TouchableOpacity } from "react-native"
 
 export const Buttons=({text,onPress})=>{
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