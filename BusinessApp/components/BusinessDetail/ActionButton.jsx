import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'

const ActionButton = ({business}) => {

   

    const actionButtonMenu=[
        {
            id:1,
            name:"Call",
            icon:require("./../../assets/images/call.png"),
            url:'tel:'+business?.contact
        },
        {
            id:2,
            name:"Location",
            icon:require("./../../assets/images/pin.png"),
            url:'https://www.google.com/maps/search/?api=1&query='+business?.adres
        },
        {
            id:3,
            name:"Web",
            icon:require("./../../assets/images/web.png"),
            url:business?.website
        },
        {
            id:4,
            name:"Share",
            icon:require("./../../assets/images/share.png"),
            url:business?.website
        },

    ]

    const OnPressHandle=(item)=>{

        if(item.name==='Share')
        {
            Share.share({
                message:business?.name+"\n Address:"+business?.adres
            })
            return ;
        }
        Linking.openURL(item.url)
    }
    
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        columnWrapperStyle={{justifyContent:"space-between"}}
        data={actionButtonMenu}
        renderItem={({item,index})=>(
            <TouchableOpacity 
                onPress={()=> OnPressHandle(item) }
                key={index}>
                <Image 
                style={{
                    width:50,
                    height:50
                }}
                source={item?.icon}/>
                <Text style={styles.buttonNametext}>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        )}
      
      />
    </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:20
    },
    buttonNametext:{
        fontFamily:"outfit-medium",
        textAlign:"center",
        marginTop:3
    }
})