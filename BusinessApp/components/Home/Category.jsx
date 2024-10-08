import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'

const Category = ({explore=false,onCategorySelect}) => {

    const router=useRouter();

    const onCategoryPressHandler=(item)=>{
        if(!explore){
            router.push('/businesslist/'+item.name)
        }else{
            onCategorySelect(item.name)
        }
    }

    const[category,setCategory]=useState([])
    useEffect(()=>{
        GetCateegoryList();
    }, [])

    const GetCateegoryList=async()=>{
        setCategory([])
        const q=query(collection(db,"Category"));
        const querySnapshot=await getDocs(q)

        querySnapshot.forEach((doc)=>{
            console.log("category",doc.data())
            setCategory(prev=>[...prev,doc.data()])
        })
    }
    return (
        <View>
            {!explore&&
            <View style={styles.textcontainer}>
                <Text style={styles.categorystyle}>
                    Category
                </Text>
                <Text style={{color:Colors.PRIMARY,fontFamily:"outfit-medium"}}>
                    View All
                </Text>
            </View>
                }
            <FlatList
            style={{marginLeft:18}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={category}
            renderItem={({item,index})=>(
                <CategoryItem 
                category={item} 
                key={index}
                onCategoryPress={(category)=>onCategoryPressHandler(item) } // burada yolluyoruz
                />
                
            )}
            
            />
            

        </View>
        
    )
}

export default Category

const styles = StyleSheet.create({
    categorystyle: {
        
        fontSize: 20,
        fontFamily: "outfit-bold"
    },
    textcontainer:{
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
    }
})