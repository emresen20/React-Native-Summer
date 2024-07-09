import { FlatList, Pressable, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SerachResults = ({data,input,setInput}) => {
    const navigation=useNavigation();

  return (
    <View 
        style={{
            padding:10,

        }}>
            <FlatList data={data} renderItem={({item})=>{
                if(item.place.toLowerCase().includes(input.toLowerCase())){
                    if(input=== ""){
                        return null;
                    }else{
                        return(
                            <Pressable 
                                onPress={()=>{
                                    setInput(item.place);
                                    navigation.navigate("HomeScreen",{
                                        input:item.place
                                    })

                                }}
                                style={{
                                    flexDirection:"row",
                                    alignItems:"center",
                                    marginVertical:8
                                }}>
                                <View 
                                    style={{
                                        
                                    }}>
                                    <Image  style={{
                                        width:70,
                                        height:70
                                    }}
                                    source={{uri:item.placeImage}}/>
                                </View>
                                <View 
                                    style={{
                                        marginLeft:10
                                    }}>
                                    <Text 
                                        style={{
                                            fontWeight:"600",
                                            fontSize:15

                                        }}>
                                        {item.place}
                                        </Text>
                                    <Text style={{marginVertical:3}}>{item.shortDescription}</Text>
                                    <Text style={{color:"gray",fontSize:14}}>{item.properties.length} Properties</Text>
                                </View>
                            </Pressable>
                        )
                    }
                }
            }}/>
    </View>
  )
}

export default SerachResults

const styles = StyleSheet.create({})