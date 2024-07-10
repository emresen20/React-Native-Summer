import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { data } from '../data';
import { FontAwesome } from '@expo/vector-icons';


import PropertyCard from '../components/PropertyCard';
import { BottomModal, ModalFooter, SlideAnimation, ModalTitle, ModalContent } from 'react-native-modals';
import MapScreen from './MapScreen';



const PlacesScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [modalVisiable, setModalVisiable] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('')

  const filters = [
        {
          id: "0",
          filter: "cost:Low to High",
        },
        {
          id: "1",
          filter: "cost:High to Low",
        },
      ];

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

    const serachPlaces=data?.filter((item)=> item.place === route.params.place)
    const [sortedData,setSortedData]= useState(data)

    const comparison = (a,b)=>{
        if(a.newPrice< b.newPrice){
            return -1;
        }
        if(a.newPrice>b.newPrice){
            return 1;
        }
        return 0;

    }
    const compare = (a,b)=>{
        if(a.newPrice> b.newPrice){
            return -1;
        }
        if(a.newPrice<b.newPrice){
            return 1;
        }
        return 0;

    }
    
     const applyFilter = (filter)=>{
         setModalVisiable(false)
        switch(filter){
            case "cost:High to Low":
                serachPlaces.map((val)=> val.properties.sort(compare))
                setSortedData(serachPlaces)
                break;
            case"cost:Low to High":
            serachPlaces.map((val)=> val.properties.sort(comparison))
            setSortedData(serachPlaces);
            break;
         }
     }
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
                    onPress={() => setModalVisiable(!modalVisiable)}
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
                    onPress={()=> navigation.navigate("MapScreen",{
                        serhResults:serachPlaces,
                    })
                        
                    }
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

                {sortedData?.filter((item) => item.place === route.params.place).
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
                        onPress={()=> applyFilter(selectedFilter)}
                        style={{
                            paddingRight: 10,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginVertical: 10,
                            marginBottom:30
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
                <ModalContent style={{ width: "100%", height: 280 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View
                            style={{
                                marginVertical: 10,
                                flex: 2,
                                height: 280,
                                borderRightWidth: 1,
                                borderColor: "gray"
                            }}>
                            <Text style={{ textAlign: "center" }}>Sort</Text>
                        </View>
                        <View
                            style={{ flex: 3, margin: 10 }}>
                            {filters.map((item, index) => (
                                <Pressable
                                    onPress={() => setSelectedFilter(item.filter)}
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: 8
                                    }}
                                    key={index}>
                                    {
                                        selectedFilter.includes(item.filter) ? (
                                            <FontAwesome name="circle" size={18} color="green" />

                                        ) :
                                            <FontAwesome name="circle-thin" size={18} color="black" />
                                    }

                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: "500",
                                            marginLeft: 6

                                        }}>
                                        {item.filter}
                                    </Text>
                                </Pressable>
                            ))}

                        </View>
                    </View>

                </ModalContent>

            </BottomModal>
        </View>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({})