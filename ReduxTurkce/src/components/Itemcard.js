import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Animated,{BounceIn, BounceOut, FlipOutYRight} from 'react-native-reanimated';

const Itemcard = ({item,deleteDAta,updateData,index}) => {
    return (
        <Animated.View 
            entering={BounceIn.delay(100*(index+1))}
            exiting={FlipOutYRight.delay(100)}
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
           

        </Animated.View >
    )
}

export default Itemcard

const styles = StyleSheet.create({})