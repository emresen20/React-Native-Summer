import { Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Shared from "../../Shared/Shared";
import { useUser } from '@clerk/clerk-expo';

const MarkFavorite = ({ pet,color="black" }) => {

    const { user } = useUser();
    const [favList, setFavList] = useState([]);
    console.log(favList);

    useEffect(() => {
        if (user) {
            GetFav();
        }
    }, [user]);

    const GetFav = async () => {
        const result = await Shared.GetFavList(user);
        console.log(result);
        setFavList(result?.favorites ? result?.favorites : []);
    };

    const AddToFav = async () => {
        const favResult = [...favList, pet.id]; // favList'in yeni bir kopyasını oluşturup, pet.id ekliyoruz
        await Shared.UpdateFav(user, favResult);
        setFavList(favResult); // favList'i yeni diziyle güncelliyoruz
    };


    const removeFromFav=async()=>{
        const favResult=favList.filter(item=>item!=pet.id) // elde olan id yi listeden çıkarır
        await Shared.UpdateFav(user, favResult);
        setFavList(favResult);
    }

    return (
        <View>
            {favList?.includes(pet.id) ? (
                <Pressable onPress={removeFromFav}>
                    <AntDesign name="heart" size={30} color="red" />
                </Pressable>
            ) : (
                <Pressable onPress={AddToFav}>
                    <AntDesign name="hearto" size={30} color={color}/>
                </Pressable>
            )}
        </View>
    );
};

export default MarkFavorite;

const styles = StyleSheet.create({});
