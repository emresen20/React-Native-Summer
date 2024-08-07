import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
const HomeScreen = () => {

  const [data, setData] = useState([])
  console.log("data", data)
  // datayı firebaseye yollama
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactnativelesson"), {
        first: "zero to hero",
        content: "react native tutorial",
        lesson: 91
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // datayı firebaseden çekme

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "reactnativelesson"));
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      setData([...data, doc.data()]) // daha önceki veriler dursun bir öncekini sonuna ekle
    });
  }

  //datayı silme

  const deleteDAta = async () => {
    await deleteDoc(doc(db, "reactnativelesson", "customDocId"))
  }

  // update yapma

  const updateData = async () => {
    try {
      const lessonData = doc(db, "reactnativelesson", "aMvMqLFs1gupKYju9MfZ");

      await updateDoc(lessonData, {
        lesson: 9310
      },
    console.log("güncenlendi")
    );
    } catch (error) {
      console.log(error)
    }

  }



  // const updateDoc = async () => {
  //   try {
  //     const docRef = doc(db, "reactnativelesson", "customDocId"); // customDocId kendi belirlediğiniz bir ID olabilir
  //     await setDoc(docRef, {
  //       first: "selam deneme",
  //       content: "react native tutorial",
  //       lesson: 90
  //     });
  //     console.log("Document successfully written!");
  //   } catch (e) {
  //     console.error("Error setting document: ", e);
  //   }
  // };

  const { isLoading, user } = useSelector((state) => state.user)
  return (
    <SafeAreaView style={{
      flex: 1, justifyContent: "center", alignItems: "center",
      backgroundColor: "red"
    }}>
      <TouchableOpacity onPress={() => sendData()}>
        <Text>Yolla</Text>
      </TouchableOpacity >

      <TouchableOpacity style={{ marginTop: 200 }} onPress={() => getData()}>
        <Text>çek</Text>
      </TouchableOpacity>

      {data.map((item, index) => (
        <Text key={index}>{item?.content}</Text>
      ))}
      <TouchableOpacity style={{ marginTop: 200 }} onPress={() => deleteDAta()}>
        <Text>Delete data</Text>
        <TouchableOpacity style={{ marginTop: 100 }} onPress={() => updateData()}>
        <Text>updateData</Text>
      </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})