import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
const HomeScreen = () => {

  const [data, setData] = useState([])
  const [isSaved, setISSaved] = useState(false)
  const [updateThedata, setUpdateThedata] = useState('')

  console.log(data)

  useEffect(() => {
    getData();
  }, [isSaved])
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

    const allData = []

    try {
      const querySnapshot = await getDocs(collection(db, "reactnativelesson"));
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        //setData([...data, doc.data()]) // daha önceki veriler dursun bir öncekini sonuna ekle
        //allData.push(doc.data()) // bu da şirketlerde yapılan şık çözüm
        allData.push({ ...doc.data(), id: doc.id }) // idiyi dahil edip spesefik işlem yapmak
      });
      setData(allData)

    } catch (error) {
      console.log(error)

    }

  }

  //datayı silme

  const deleteDAta = async (item) => {
    try {
      await deleteDoc(doc(db, "reactnativelesson", item))
      console.log("silindi başarılı")
      setISSaved(!isSaved)

    } catch (error) {
      console.log(error)
    }

  }

  // update yapma

  const updateData = async (item) => {
    try {
      const lessonData = doc(db, "reactnativelesson", item);

      await updateDoc(lessonData, {
        content: updateThedata
      },

      );
      console.log("güncenlendi")
      setISSaved(!isSaved)
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
    <ScrollView style={{
      flex: 1,
    }}>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:25}}>
        <TextInput
          value={updateThedata}
          onChangeText={setUpdateThedata}
          placeholder='enter your data'
          style={{
            borderWidth: 1,
            width: '50%',
            paddingVertical: 10,
            marginBottom: 10
          }}
        />
        <View style={{ marginBottom: 50 }}>
          {data.map((item, index) => (
            <TouchableOpacity key={index}
              //onPress={() => deleteDAta(item.id)}
              onPress={() => updateData(item.id)}
            >
              <Text >{item?.content}</Text>
              <Text>{item?.id}</Text>
            </TouchableOpacity>

          ))}
        </View>



        <TouchableOpacity onPress={() => { sendData(), setISSaved(!isSaved) }}>
          <Text>save</Text>
        </TouchableOpacity >

        <TouchableOpacity style={{ marginTop: 100 }} onPress={() => getData()}>
          <Text>çek</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ marginTop: 100 }} onPress={() => deleteDAta()}>
          <Text>Delete data</Text>
          <TouchableOpacity style={{ marginTop: 100 }} onPress={() => updateData()}>
            <Text>updateData</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})