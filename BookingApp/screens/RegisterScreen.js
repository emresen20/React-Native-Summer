import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigation = useNavigation();
    const register = () => {
        if (email === "" || password === "" || phone === "") {
            Alert.alert('Invalid Details', 'Please enter all the credentials', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials._tokenResponse.email;
            // userCredentials: Kullanıcı oluşturulduktan sonra döndürülen nesne. Bu nesne, kullanıcının bilgilerini içerir.
            // _tokenResponse.email: Yeni oluşturulan kullanıcının e-posta adresi.
            const uid = auth.currentUser.uid;
            // auth.currentUser: Firebase Authentication'da oturum açmış olan mevcut kullanıcı.
            // uid: Mevcut kullanıcının benzersiz kimliği (User ID).
            setDoc(doc(db, "users", `${uid}`), {
                // setDoc: Firestore veritabanında belirli bir belgeyi oluşturur veya günceller.
                // doc: Firestore veritabanında belirli bir belgeyi tanımlar.
                // db: Firestore veritabanı örneği.
                // "users": Belgenin bulunacağı koleksiyon adı.
                // `${uid}`: Belgenin kimliği (kullanıcının uid'si).
                email: user,
                phone: phone,

            }
            )
        })
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
            padding: 10,
            alignItems: "center"
        }} >
            <KeyboardAvoidingView>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 80
                    }}>
                    <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
                        Register
                    </Text>

                    <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 9 }}>
                        Create an Account
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 50,

                    }}>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: "500", color: "gray" }}>Email</Text>

                        <TextInput
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder='Enter your Email Id'
                            placeholderTextColor={"black"}
                            style={{
                                borderBottomColor: "gray",
                                borderBottomWidth: 1,
                                marginVertical: 10,
                                width: 300,
                                fontSize: 17
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: "500", color: "gray" }}>Password</Text>

                        <TextInput
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                            placeholder='Password'
                            placeholderTextColor={"black"}
                            style={{
                                borderBottomColor: "gray",
                                borderBottomWidth: 1,
                                marginVertical: 10,
                                width: 300,
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: "500", color: "gray" }}>Phone Number</Text>

                        <TextInput
                            onChangeText={(text) => setPhone(text)}
                            value={phone}
                            placeholder='Phone Number'
                            placeholderTextColor={"black"}
                            style={{
                                borderBottomColor: "gray",
                                borderBottomWidth: 1,
                                marginVertical: 10,
                                width: 300,
                                fontSize: 17
                            }}
                        />
                    </View>

                </View>
                <Pressable
                    onPress={register}
                    style={{
                        width: 200,
                        backgroundColor: "#003580",
                        padding: 15,
                        borderRadius: 7,
                        marginTop: 50,
                        marginRight: "auto",
                        marginLeft: "auto",


                    }}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 17, fontWeight: "500" }}>Register</Text>
                </Pressable>
                <Pressable style={{ marginTop: 20, }}>
                    <Text
                        onPress={() => navigation.goBack()}
                        style={{ textAlign: "center", color: "gray", fontSize: 15, fontWeight: "500" }}>
                        Already have an account? Sign In
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})