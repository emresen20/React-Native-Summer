import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import PetAbout from '../../components/PetDetails/PetAbout';
import PetOwner from '../../components/PetDetails/PetOwner';
import Colors from '../../constants/Colors';
import { useUser } from '@clerk/clerk-expo';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';

const PetDetails = () => {
  const pet = useLocalSearchParams() // coming from pet listiem router 
  const navigation = useNavigation();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: ''
    })
  }, [])

  // used tı initiate the chat between two users.

  const InitiateChat = async () => {
    const docId1 = user?.primaryEmailAddress?.emailAddress + '_' + pet?.email;
    const docId2 = pet?.email + '_' + user?.primaryEmailAddress?.emailAddress;

    const q = query(collection(db, 'Chat'), where('id', 'in', [docId1, docId2]));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
      console.log(doc.data())
      router.push({
        pathname: "/chat",
        params: { id: doc.id }
      })
    })

    if (querySnapshot.docs?.length == 0) {
      await setDoc(doc(db, 'Chat', docId1), {
        id: docId1,
        users: [
          {
            email: user?.primaryEmailAddress?.emailAddress,
            imageUrl: user?.imageUrl,
            name: user?.fullName

          },
          {
            email: pet?.email,
            imageUrl: pet?.userImage,
            name: pet?.username
          }
        ]
      });
      router.push({
        pathname: "/chat",
        params: { id: docId1 }
      })
    }
  }

  return (
    <View>
      {/* pet Info */}
      <ScrollView>
        <PetInfo pet={pet} />
        {/* Pet Properties */}
        <PetSubInfo pet={pet} />

        {/* About  */}
        <PetAbout pet={pet} />

        {/* Pet Owner */}
        <PetOwner pet={pet} />

        <View style={{ height: hp('8%') }}></View>

      </ScrollView>

      {/* Adopt me button */}
      <View style={styles.buttomcontainer}>
        <TouchableOpacity
          onPress={InitiateChat}
          style={styles.adoptButton}>
          <Text style={styles.adopttext}>Adopt Me</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default PetDetails

const styles = StyleSheet.create({
  adoptButton: {
    padding: hp('2%'),
    backgroundColor: Colors.PRIMARY
  },
  buttomcontainer: {
    position: "absolute",
    width: '100%',
    bottom: hp('0%')

  },
  adopttext: {
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: hp("2%")
  }
})