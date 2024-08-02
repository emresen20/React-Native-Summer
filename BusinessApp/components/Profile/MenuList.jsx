import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const MenuList = () => {

    const router= useRouter();

    const menuList = [
        {
            id: 1,
            name: "Add Business",
            icon: require("../../assets/images/add.png"),
            path: "/businessadd/add-business"
        },
        {
            id: 2,
            name: "My Business",
            icon: require("../../assets/images/business.png"),
            path: ''
        },
        {
            id: 3,
            name: "Share App",
            icon: require("../../assets/images/share.png"),
            path: ''
        },
        {
            id: 4,
            name: "Logout",
            icon: require("../../assets/images/logout.png"),
            path: ''
        }
    ]

    return (
        <View style={{ marginTop: 40 }}>
            <FlatList
                numColumns={2}
                data={menuList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={()=> router.push(item.path)}
                        key={index}
                        style={styles.businessView}>
                        <Image
                            source={item.icon}
                            style={styles.imagestyle}
                        />
                        <Text style={styles.nameStyle}>{item.name}</Text>
                    </TouchableOpacity>
                )}

            />
            <Text style={styles.developstyle}>Developed by Emre Shen @2024</Text>
        </View>
    )
}

export default MenuList

const styles = StyleSheet.create({
    imagestyle: {
        width: 50,
        height: 50
    },
    nameStyle: {
        fontFamily: "outfit-medium",
        fontSize: 16,
        flex: 1,
        color: Colors.PRIMARY
    },
    businessView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        padding: 10,
        borderWidth: 1.5,
        borderColor: Colors.PRIMARY,
        borderRadius: 15,
        margin: 10,
        backgroundColor: "white"
    },
    developstyle: {
        fontFamily: "outfit",
        textAlign: "center",
        marginTop: 50,
        color: Colors.ICON_BG
    }
})