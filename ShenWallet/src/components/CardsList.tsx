import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { cancelAnimation, useSharedValue, withDecay,clamp,withClamp } from 'react-native-reanimated';
import Card from './Card';

const cards = [
    require('../../assets/cards/Card 1.png'),
    require('../../assets/cards/Card 2.png'),
    require('../../assets/cards/Card 3.png'),
    require('../../assets/cards/Card 4.png'),
    require('../../assets/cards/Card 5.png'),
    require('../../assets/cards/Card 6.png'),
    require('../../assets/cards/Card 7.png'),
    require('../../assets/cards/Card 8.png'),
    require('../../assets/cards/Card 9.png'),
]

const CardsList = () => {

    const[listHeight,setListHeight]= useState(0);
    const {height:screenheight}= useWindowDimensions() //ana ekranın hepsini alır
    const maxScrolly= listHeight -screenheight // maksimum scrollü bulmak için güzel görüntü açısında buraya yerleitrildi

    const scrollY = useSharedValue(0); // basılan yeri 0 dan başlatarak kaydeder

    const activeCardIndex = useSharedValue(null); //hangi karta tıkladığımızın indexini alır

    const pan = Gesture.Pan()
    .onBegin(()=>{ // scrolle başladığımızda bir yere dokununca durması için
        cancelAnimation(scrollY)
    })
    .onStart(()=>{  // dokunmaya başladığımız yeri kaydeder
        console.log("Staring")
    }).onChange((event)=>{
        scrollY.value= clamp(scrollY.value - event.changeY,0,maxScrolly);  //dikeyde ne ne kadar değişim olduğunu kayderder
        //clamp sonsuz bir şekilde yukarı aşağı gitmemesini sağlar.

        console.log("Scroll"+ scrollY.value);

 
    }).onEnd((event)=>{
        scrollY.value=withClamp({min:0, max: maxScrolly},withDecay({velocity: -event.velocityY}))  //kartları bıraktığımız yerden nasıl bıraktıysak hızlı veya yavaş kaydırır
        //withClamp withdecaye ek olarank clmapin yaptığını yapmak için kullanılır
    });
    
    
    
    return (
        //kaydırma işlemlerimiz için sardık
        <GestureDetector gesture={pan}>
            <SafeAreaView style={{ padding: 10 }} onLayout={(event)=> setListHeight(event.nativeEvent.layout.height)}>
                {cards.map((card, index) =>  // map ile kartılarımızı dönrüdük
                    <Card 
                        key={index} 
                        index={index} 
                        card={card} 
                        scrollY={scrollY}// kartımıza yeni bir sayfa açtık ve prop ile değerleri aktardık
                        activeCardIndex={activeCardIndex}
                        /> 
                        
                )}

            </SafeAreaView>
        </GestureDetector>

    )
}

export default CardsList
