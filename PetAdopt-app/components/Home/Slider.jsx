import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Slider = () => {

    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        GetSliders();
    }, [])

    const GetSliders = async () => {
        try {
            setSliderList([]);
            const querySnapshot = await getDocs(collection(db, "Sliders"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setSliderList(sliderList => [...sliderList, doc.data()]);
            });
        } catch (error) {
            console.error("Error fetching sliders: ", error);
            // Hata durumunda kullanıcıya bir bildirim gösterme veya başka bir işlem yapma
        }
    }
    return (
        <View style={styles.flatContainer}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}

                data={sliderList}
                renderItem={({ item, index }) => (
                    <View>
                        <Image
                            source={{ uri: item?.imageUrl }}
                            style={styles.imageslider}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    imageslider: {
        width: Dimensions.get("screen").width * 0.9,
        height: hp("20%"),
        borderRadius: hp("1.5%"),
        marginRight: hp("1.1%")
    },
    flatContainer:{
        marginTop:hp("3%")
    }
})