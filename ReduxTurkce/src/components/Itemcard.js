import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Itemcard = ({item,deleteDAta,updateData}) => {
    return (
        <View 

            style={{ padding: 40, backgroundColor: "green", marginTop: 5, flexDirection: "row", gap: 10, borderRadius: 10 }}
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
    )
}

export default Itemcard

const styles = StyleSheet.create({})