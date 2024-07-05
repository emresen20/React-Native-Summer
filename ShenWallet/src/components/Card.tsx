import React, { useState } from 'react'
import Animated, { clamp, useAnimatedReaction, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { View } from 'react-native-reanimated/lib/typescript/Animated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';

const Card = ({ card, index, scrollY, activeCardIndex }) => {

    const [cardHeight, setCardHeight] = useState(0); //cimagenin yüksekliğinin boyutunu alldı

    const translateY =useSharedValue(0);

    const {height:screenheight}= useWindowDimensions();

    useAnimatedReaction( //useAnimatedReaction, belirli bir değerin değişimini 
                        //izlemek ve bu değişime tepki olarak başka bir değeri güncellemek için kullanılır.
        ()=> scrollY.value, //izlenecek değeri döndürür izlenecek değeri döndürür
        (current) =>{
            translateY.value=clamp(-current,-index * cardHeight * 0.9, 0)
            //ci parametre bir callback fonksiyonudur 
            //((current) => { ... }). Bu fonksiyon, izlenen değer (scrollY.value) 
            //her değiştiğinde çalıştırılır. current değişkeni, scrollY.value'in mevcut değerini temsil eder.

        }
    );
    // const translateY = useDerivedValue(() => clamp(-scrollY.value, -index * cardHeight * 0.9, 0)) //yukarıda bir stack halinde durmasını sağladık
    // //her indexi imagenin yüksekliği ile çarptık mesla ilk index 1 200 yukarı gitmesi gerek ikincisini 400 bu yü<den indexlerle çarptık 
    // //0.9 ile ise yukarıdan biraz boşluk bırakmak için yaptık

    useAnimatedReaction(
        ()=> activeCardIndex.value,
        (curent,pervious) => {
            if(curent===pervious){
                return;
            }
            
            if(activeCardIndex.value === null){
                translateY.value=withTiming(clamp(-scrollY.value, -index * cardHeight * 0.9, 0));  //seçilen yoksa normal hal
            }else if(activeCardIndex.value === index ){ // seçilen kartı ortda gösterir
                translateY.value=withTiming(-index * cardHeight +100);
                console.log("value"+index)

            }else{
                translateY.value=withTiming(  //kartların hepsini en altta toplar
                    -index *cardHeight *0.9 +screenheight *0.7
                )
            }

         
        }
    )

    const tapgesture = Gesture.Tap().
    onEnd(()=> {
        if(activeCardIndex.value===null) {
            activeCardIndex.value=index;
        }else{
            activeCardIndex.value=null
        }
       
    })



    return (
        <GestureDetector gesture={tapgesture}>
            <Animated.Image  //animmelerin çalışması için burdan çağrışım yaptık
                source={card}
                onLayout={(event) => setCardHeight(event.nativeEvent.layout.height + 10)}
                style={{
                    width: '100%',
                    aspectRatio: 7 / 4,
                    height: undefined,
                    marginVertical: 5,

                    transform: [
                        {
                            translateY: translateY  //görütünün animasyonlu olması için yaptık
                        }
                    ]
                }} />
        </GestureDetector>
    )
}

export default Card;
