import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigation =useNavigation();

  return (
    <SafeAreaView 
        style={{
            flex:1,
            backgroundColor:"white",
            padding:10,
            alignItems:"center"
        }}>
      <KeyboardAvoidingView>
        <View 
            style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:80
            }}>
            <Text style={{color:"#003580",fontSize:17,fontWeight:"700"}}>
                Sign In
            </Text>

            <Text style={{fontSize:16,fontWeight:"500",marginTop:9}}>
            Sign In to Your Account
            </Text>
        </View>
        <View 
            style={{
                marginTop:50,

            }}>
                <View>
                    <Text style={{fontSize:17,fontWeight:"500",color:"gray"}}>Email</Text>

                    <TextInput 
                    onChangeText={(text)=>setEmail(text)}
                        value={email}
                        placeholder='enter your email id'
                        placeholderTextColor={"black"}
                        style={{
                            borderBottomColor:"gray",
                            borderBottomWidth:1,
                            marginVertical:10,
                            width:300,
                            fontSize:17
                        }}
                        />
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:17,fontWeight:"500",color:"gray"}}>Password</Text>

                    <TextInput 
                        onChangeText={(text)=>setPassword(text) }
                        value={password}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor={"black"}
                        style={{
                            borderBottomColor:"gray",
                            borderBottomWidth:1,
                            marginVertical:10,
                            width:300,
                        }}
                        />
                </View>

        </View>
        <Pressable 
            style={{
                width:200,
                backgroundColor:"#003580",
                padding:15,
                borderRadius:7,
                marginTop:50,
                marginRight:"auto",
                marginLeft:"auto",

            
            }}>
            <Text style={{color:"white",textAlign:"center",fontSize:17,fontWeight:"500"}}>Login</Text>
        </Pressable>
        <Pressable style={{marginTop:20,}}>
            <Text 
                onPress={()=>navigation.navigate("RegisterScreen")}
                style={{textAlign:"center",color:"gray",fontSize:15,fontWeight:"500"}}>
                Don't Have an Account? Sign up
            </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})