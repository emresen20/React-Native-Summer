import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const MenuList = () => {

    const router = useRouter();
    const { signOut } = useAuth();


    const onMenuClick = (item) => {
        if (item.path == "logout") {
            signOut();
            return;
        }
        if (item.path == 'share') {
            Share.share({
                  message: "You can Download the APK here: https://drive.google.com/file/d/1jcg6qZu4IDW0kmrn0uLxwz3nfVZ0XijD/view?usp=drive_link"
                
            })
            return;
        }

        router.push(item.path)
    }

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
            path: '/businessadd/my-business'
        },
        {
            id: 3,
            name: "Share App",
            icon: require("../../assets/images/share.png"),
            path: 'share'
        },
        {
            id: 4,
            name: "Logout",
            icon: require("../../assets/images/logout.png"),
            path: 'logout'
        }
    ]


    return (
        <View style={{ marginTop: 40 }}>
            <FlatList
                numColumns={2}
                data={menuList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => onMenuClick(item)}
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