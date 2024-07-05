import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';


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

    const pan = Gesture.Pan().
    onStart(()=>{
        console.log("Staring")
    }).onChange((event)=>{
        console.log("panning"+event.changeY)
    }).onEnd(()=>{
        console.log("ended")
    });
    
    
    
    return (
        <GestureDetector gesture={pan}>
            <SafeAreaView style={{ padding: 10 }}>
                {cards.map((card, index) =>
                    <Image
                        key={index}
                        source={card}
                        style={{
                            width: '100%',
                            aspectRatio: 7 / 4,
                            height: undefined,
                            marginVertical: 5
                        }} />
                )}

            </SafeAreaView>
        </GestureDetector>

    )
}

export default CardsList
