import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation= useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Şifre" 
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=> navigation.navigate("SignUpScreen")}
          style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 10,
  },
  signupButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
