import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from "../../constants/Colors"
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PopularBusinessItem from './PopularBusinessItem'

const PopulerBusiness = () => {

    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        GetBusinessList();
    }, [])

    const GetBusinessList = async () => {
        setBusinessList([])
        const q = query(collection(db, "BusinessList"), limit(10))
        const querySnapshot = await getDocs(q);

        let businesses = [];
        querySnapshot.forEach((doc) => {
            console.log("getbusineslist", doc.data())
            // setBusinessList(prev => [...prev, {id:doc.id,...doc.data()}])
            businesses.push({ id: doc.id, ...doc.data() })
        });
        businesses.sort((a, b) => a.name.localeCompare(b.name));

        setBusinessList(businesses);
    }
    return (
        <View>
            <View style={styles.textcontainer}>
                <Text style={styles.categorystyle}>
                    Populer Business
                </Text>
                <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
                    View All
                </Text>

            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={businessList}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 5 }}>
                        <PopularBusinessItem
                            business={item}
                            key={index}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default PopulerBusiness

const styles = StyleSheet.create({
    categorystyle: {

        fontSize: 20,
        fontFamily: "outfit-bold"
    },
    textcontainer: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    }
})