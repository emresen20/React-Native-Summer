import { StyleSheet, Text, View, TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ad Soyad" 
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={(a)=>setName(a)}

      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={(a)=>setEmail(a)}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Şifre" 
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={(a)=>setPassword(a)}
      />
      <TouchableOpacity 
      onPress={()=>console.log(email,name,password)}
      style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=> navigation.navigate("LoginScreen")}
      style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Zaten hesabın var mı? Giriş Yap</Text>
      </TouchableOpacity>
    </View>
     </TouchableWithoutFeedback >
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  signupButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#28A745',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
