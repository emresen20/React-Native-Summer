import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddNewModal = () => {
    const [questions,setQuestions]=useState("")
    const [options,setOptions]=useState([{text:""}, {text:""}])

    const handleOptionChange=(val,i)=>{
        const data = [...options];
        data[i].text=val;
        setOptions(data)
    }

    const handleNewOptions = ()=>{
        if(options.length>=5){
            return;
        }
        setOptions((prev)=> [...prev ,{text:""}])
    }

    const handleSumbit= ()=>{
        console.log("Questions",questions)
        console.log("Options",options)
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.QuestionsText}>Question</Text>
      <TextInput
       style={styles.textinput} 
       placeholder='Enter a new question' 
       value={questions}
       onChangeText={setQuestions}
       />
       
      <Text style={styles.OptionsText}>Options</Text>
      {
        options.map((item,i)=>(
            <TextInput 
            style={styles.textinput} 
            placeholder='Enter a new question' 
            value={item.text}
            key={i}
            onChangeText={(val)=> handleOptionChange(val,i)}
            />
        ))
      }
     
      
      <Pressable style={styles.pressablecontainer}>
        
        <Pressable 
            onPress={handleNewOptions}
            disabled={options.length>=5}
            style={{padding:12,backgroundColor:"gray",borderRadius:5}}>
            
            <AntDesign name="pluscircleo" size={30} color="white" />

        </Pressable>
      </Pressable>
      <Pressable 
            onPress={handleSumbit}
            style={{backgroundColor:"lightblue",position:"absolute",bottom:0,width:"100%",padding:12,}}>
            <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:18}}>Save</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default AddNewModal

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:"white"
    },
    QuestionsText:{
        fontWeight:"bold",
        fontSize:25,
        marginBottom:5
    },
    textinput:{
        borderWidth:2,
        padding:10,
        borderColor:"black",
        borderRadius:10,
        textAlign:"center",
        fontSize:20,
        width:'98%',
        alignSelf:"center",
        marginTop:5
    },

    OptionsText:{
        fontWeight:"bold",
        fontSize:25,
        marginBottom:5,
        marginTop:25
    },
    pressablecontainer:{
        flexDirection:"row",
        justifyContent:"flex-end",
        marginTop:10,
        gap:30,
        margin:3

    }
})