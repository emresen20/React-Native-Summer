import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Shared from "../../Shared/Shared"
import { useUser } from '@clerk/clerk-expo';
const MarkFavorite = ({ pet }) => {

    const { user } = useUser()
    const [favList, setFavList] = useState();
    console.log(favList)

    useEffect(() => {
        user && GetFav()
    }, [user])

    const GetFav = async () => {
        const result = await Shared.GetFavList(user)
        console.log(result)
        setFavList(result?.favorties ? result?.favorties : [])
    }

    return (
        //burada kaldım

        <View>
            {favList?.includes(pet.id) ?
                <Pressable>
                    <AntDesign name="heart" size={24} color="black" />
                </Pressable>
                :
                <Pressable>
                    <AntDesign name="hearto" size={30} color="black" />
                </Pressable>
            }

        </View>

    )
}

export default MarkFavorite

const styles = StyleSheet.create({})