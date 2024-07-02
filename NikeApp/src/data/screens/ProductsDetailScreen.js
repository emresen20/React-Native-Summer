import React from 'react'
import { View, StyleSheet, Text, Image,FlatList,useWindowDimensions } from 'react-native'

import products from '../products'

const ProductsDetailScreen = () => {
    const product = products[0];

    const {width} = useWindowDimensions();

    //useWindowDimensions hook'u ile ekranın genişliği (width) ve 
    //yüksekliği (height) alınır ve bu değerler ekranda görüntülenir.
    // Ekran boyutları değiştiğinde (örneğin, cihaz döndürüldüğünde), 
    //bu değerler otomatik olarak güncellenir ve bileşen yeniden render edilir.
    return (
        <View>

            <FlatList
                data={product.images}
                renderItem={({item}) => (

                    <Image
                    source={{ uri: item }}
                    style={{  width, aspectRatio: 1 }} //aspectRatio width e göre heigh yi otomatik ayarlıyor
                />
                )}
                horizontal // yan yana yapıyor
                showsHorizontalScrollIndicator={false} // çubuğu kaldırır
                pagingEnabled // flatlisti centerlıyor
                />
           
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ProductsDetailScreen
