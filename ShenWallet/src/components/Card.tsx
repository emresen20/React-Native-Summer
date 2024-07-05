import React from 'react'
import Animated, { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { View } from 'react-native-reanimated/lib/typescript/Animated'

const Card = ({card,index,scrollY}) => {
    const translateY=useDerivedValue(()=> -scrollY.value)
    return (
        <Animated.Image  //animmelerin çalışması için burdan çağrışım yaptık
            source={card}
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
