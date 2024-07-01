import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { Buttons } from './Buttons';
import { setAuthor } from './Slice';
import { useState } from 'react';


export function GeneralScreen() {
    author = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const [texts,setTexts] = useState("");
    console.log(texts)
   
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Name: {author.author.name}</Text>
            <Text>Surname: {author.author.surname}</Text>
            <Buttons text={"edit"} onPress={() => dispatch(setAuthor({
                name: texts,
                surname: "VAROL"
            }))} />
            <Text>sayaç:{author.count}</Text>
            <TextInput style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,

            }}
                onChangeText={text => setTexts(text)} />
                
        </View>
        
    

    );
    
}