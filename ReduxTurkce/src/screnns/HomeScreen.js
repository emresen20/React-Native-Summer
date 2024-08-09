import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';

import { logout } from '../redux/userSlice';
import Itemcard from '../components/Itemcard';

const HomeScreen = () => {

  const [data, setData] = useState([])
  const [isSaved, setISSaved] = useState(false)
  const [updateThedata, setUpdateThedata] = useState('')

  const dispatch = useDispatch()

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

  // kullanıı çıkış işlemleri

  const handleLogout = async () => {
    dispatch(logout())
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
    <View style={{
      flex: 1,
    }}>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 25 }}>
        <TextInput
          value={updateThedata}
          onChangeText={setUpdateThedata}
          placeholder='enter your data'
          style={{
            borderWidth: 1,
            width: '50%',
            paddingVertical: 10,
            marginBottom: 10,
            textAlign: "center"
          }}
        />
        <View style={{height:"85%"}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Itemcard item={item} deleteDAta={deleteDAta} updateData={updateData} />
            )

            }
          />
        </View>

        {/* <View style={{ marginBottom: 50 }}>
          {data.map((item, index) => (
            <View key={index}

              style={{ padding: 50, backgroundColor: "green", marginTop: 5, flexDirection: "row", gap: 10, borderRadius: 10 }}
            //onPress={() => deleteDAta(item.id)}

            >
              <View>
                <Text >{item?.content}</Text>
                <Text>{item?.id}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => deleteDAta(item.id)} >
                  <Text style={{ marginBottom: 10 }}>sil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateData(item.id)}>
                  <Text style={{ marginBottom: 10 }}>düzenle</Text>
                </TouchableOpacity>

              </View>

            </View>

          ))}
        </View> */}


        <View style={{ flexDirection: "row", position: "absolute", bottom:-50,gap:5 }}>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: "blue" }}
            onPress={() => { sendData(), setISSaved(!isSaved) }}>
            <Text style={{ color: "white" }}>save</Text>
          </TouchableOpacity >

          <TouchableOpacity style={{ padding: 10, backgroundColor: "blue", marginTop: 10 }} onPress={() => getData()}>
            <Text style={{ color: "white" }}>çek</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 20, backgroundColor: "red", marginTop: 10 }} onPress={() => handleLogout()}>
            <Text style={{ color: "white" }}>Çıkış</Text>
          </TouchableOpacity>
        </View>



      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})