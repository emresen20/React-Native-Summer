import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
      console.log("email", email)
    } else {
      console.log("No user is signed in.");
    }
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => navigation.navigate("LoginScreen"))
      .catch(error => console.error(error));
  };

  return (

    <View style={styles.container}>
      <Text style={styles.text}> {email}</Text>
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <Pressable style={styles.button} onPress={handleSignOut}>

          <Text style={styles.buttonText}>Çıkış</Text>
        </Pressable>
      </View>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
  alignSelf:"center",
  marginTop:20,
  fontSize:25
  }
});
