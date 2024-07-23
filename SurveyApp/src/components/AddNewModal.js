import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ADD_NEW_QUESTION_MUTATION } from '../Questions/queries';
import { useMutation } from '@apollo/client';

const AddNewModal = ({closeModal}) => {

    const [addNewQuestion, { loading, error }] = useMutation(ADD_NEW_QUESTION_MUTATION)
    const [title, setTitle] = useState("")
    const [options, setOptions] = useState([{ text: "" }, { text: "" }])

    const Alertgood=()=>{
        Alert.alert('Progres', 'Succses', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    }

    const handleOptionChange = (val, i) => {
        const data = [...options];
        data[i].text = val;
        setOptions(data)
    }

    const handleNewOptions = () => {
        if (options.length >= 5) {
            return;
        }
        setOptions((prev) => [...prev, { text: "" }])
    }

    const handleSumbit = async () => {

        const options_data= options.filter((item)=> item.text !== "");

        if(!title || options_data.length<2){
            return;
        }
        const result = await addNewQuestion({
            variables: {
                title,
                options:options_data
            }
        })
        closeModal();
        Alertgood();
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.QuestionsText}>Question</Text>
            <TextInput
                style={styles.textinput}
                placeholder='Enter a new question'
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.OptionsText}>Options</Text>
            {
                options.map((item, i) => (
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter a new options'
                        value={item.text}
                        key={i}
                        onChangeText={(val) => handleOptionChange(val, i)}
                    />
                ))
            }


            <Pressable style={styles.pressablecontainer}>

                <Pressable
                    onPress={handleNewOptions}
                    disabled={options.length >= 5}
                    style={{ padding: 12, backgroundColor: "gray", borderRadius: 5 }}>

                    <AntDesign name="pluscircleo" size={30} color="white" />

                </Pressable>
            </Pressable>
            <Pressable
                onPress={handleSumbit}
                style={{ backgroundColor: "lightblue", position: "absolute", bottom: 0, width: "100%", padding: 12, }}>
                {
                    loading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 18 }}>Save</Text>
                    )
                }


            </Pressable>
        </SafeAreaView>
    )
}

export default AddNewModal

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "white"
    },
    QuestionsText: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 5
    },
    textinput: {
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 20,
        width: '98%',
        alignSelf: "center",
        marginTop: 5
    },

    OptionsText: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 5,
        marginTop: 25
    },
    pressablecontainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10,
        gap: 30,
        margin: 3

    }
})