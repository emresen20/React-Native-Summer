import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMutation } from '@apollo/client';
import { NEW_ANSWER_MUTATION } from '../screens/queriesdetail';
import { auth } from '../auth';

const Form = ({ options,setIsVoted }) => {
    const [selected, setSelected] = useState("");
    console.log("auth.currentUser",auth.currentUser.uid)

    const handlePress = (id) => {
        setSelected(id)
    }

    const [newAnswer,{loading}]=useMutation(NEW_ANSWER_MUTATION);

    const handleSumbit= async()=>{

        if(!selected){
            return;
        }
        await newAnswer({
            variables:{
                option_id:selected,
                user_id:auth.currentUser?.uid
            }
        })
        alert("succses")
        setIsVoted(true)

    }

    console.log("selected id", selected)
    return (
        <View>
            {
                options.map((option) => (
                    <Pressable
                        key={option.id}
                        onPress={() => handlePress(option.id)} // İşlev ekleyin veya ilgili işlevi burada çağırın
                        style={{
                            padding: 10,
                            margin: 5,
                            backgroundColor: 'gray',
                            marginVertical: 5,
                            borderRadius: 4,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Text style={{ color: "white" }}>{option.text}</Text>
                        {selected === option.id && <MaterialCommunityIcons name="vote" size={30} color="white" />}
                    </Pressable>
                ))

            }
            <Pressable 
                onPress={handleSumbit}
                style={{ padding: 10, backgroundColor: "red", marginTop: 65 }}>

                    {loading?(
                        <ActivityIndicator/>
                    ):(
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 19,
                            fontWeight:"bold"
                        }}
                        >Sumbit
                        </Text>
                    )}
          
            </Pressable>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({})