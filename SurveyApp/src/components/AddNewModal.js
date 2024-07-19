import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddNewModal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.QuestionsText}>Question</Text>
      <TextInput style={styles.textinput} placeholder='Enter a new question' />

      <Text style={styles.OptionsText}>Options</Text>
      <TextInput style={styles.textinput} placeholder='Enter a new question' />
      <TextInput style={styles.textinput} placeholder='Enter a new question' />
      <Pressable style={styles.pressablecontainer}>
        
        <Pressable style={{padding:12,backgroundColor:"gray",borderRadius:5}}>
            <AntDesign name="pluscircleo" size={30} color="white" />

        </Pressable>
      </Pressable>
      <Pressable style={{backgroundColor:"lightblue",position:"absolute",bottom:0,width:"100%",padding:12,}}>
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