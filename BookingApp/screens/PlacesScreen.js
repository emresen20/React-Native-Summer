import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { data } from '../data';
import PropertyCard from '../components/PropertyCard';
import { BottomModal, ModalFooter,SlideAnimation,ModalTitle, ModalContent } from 'react-native-modals';

const PlacesScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [modalVisiable, setModalVisiable] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: "Popular Places",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"

            },
            headerStyle: {
                backgroundColor: "#003580",
                height: 110,

            },

        })
    });
    console.log(route.params)
    return (
        <View>
            <Pressable
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                    padding: 12,
                    backgroundColor: "white"
                }}>
                <Pressable
                    onPress={()=> setModalVisiable(!modalVisiable)}
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <Octicons name="arrow-switch" size={22} color="gray" />
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "500",
                            marginLeft: 8

                        }}>Sort
                    </Text>
                </Pressable>

                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <Ionicons name="filter" size={22} color="gray" />
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "500",
                            marginLeft: 8

                        }}>
                        Filter
                    </Text>
                </Pressable>

                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <Fontisto name="map-marker-alt" size={22} color="gray" />
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "500",
                            marginLeft: 8

                        }}>Map
                    </Text>
                </Pressable>

            </Pressable>
            <ScrollView
                style={{
                    backgroundColor: "#F5F5F5"
                }}>

                {data?.filter((item) => item.place === route.params.place).
                    map((item) => item.properties.map((property, index) => (
                        <PropertyCard
                            key={index}
                            rooms={route.params.rooms}
                            children={route.params.children}
                            adults={route.params.adults}
                            selectedDates={route.params.selectedDates}
                            property={property}
                            aviableRooms={property.rooms}
                        />
                    )))}
            </ScrollView>
            <BottomModal
                onHardwareBackPress={() => setModalVisiable(!modalVisiable)}
                swipeDirection={["up", "down"]}
                swipeThreshold={200} footer={<ModalFooter>
                    <Pressable
                        style={{
                            paddingRight: 10,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginVertical: 10
                        }}>
                        <Text>Apply</Text>
                    </Pressable>
                </ModalFooter>}
                modalTitle={<ModalTitle title='Sort and Filter' />}
                modalAnimation={new SlideAnimation({
                    slideFrom: "bottom",
                })
                }
                visible={modalVisiable}
                onTouchOutside={() => setModalVisiable(!modalVisiable)}
            >
                <ModalContent style={{width:"100%",height:280}}>
                    <View style={{flexDirection:"row"}}>
                        <View 
                            style={{
                                marginVertical:10,
                                flex:2,
                                height:280,
                                borderRightWidth:1,
                                borderColor:"gray"
                                }}> 
                            <Text style={{textAlign:"center"}}>Sort</Text>
                        </View>
                        <View   
                            style={{flex:3}}>

                        </View>
                    </View>

                </ModalContent>

            </BottomModal>
        </View>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({})