import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation=useNavigation();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => navigation.navigate("LoginScreen"))
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Çıkış</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
