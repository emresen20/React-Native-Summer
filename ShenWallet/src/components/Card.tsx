import React, { useState } from 'react'
import Animated, { clamp, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { View } from 'react-native-reanimated/lib/typescript/Animated'

const Card = ({card,index,scrollY}) => {

    const [cardHeight,setCardHeight]=useState(0); //cimagenin yüksekliğinin boyutunu alldı

    const translateY=useDerivedValue(()=>clamp(-scrollY.value, -index* cardHeight*0.9,0) ) //yukarıda bir stack halinde durmasını sağladık
    //her indexi imagenin yüksekliği ile çarptık mesla ilk index 1 200 yukarı gitmesi gerek ikincisini 400 bu yü<den indexlerle çarptık 
    //0.9 ile ise yukarıdan biraz boşluk bırakmak için yaptık
    return (
        <Animated.Image  //animmelerin çalışması için burdan çağrışım yaptık
            source={card}
            onLayout={(event)=> setCardHeight(event.nativeEvent.layout.height+10)}
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
    )
}

export default Card;
