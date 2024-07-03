import React from 'react'
import { View, StyleSheet, Text, Image, FlatList, useWindowDimensions, ScrollView } from 'react-native'

import products from '../products'

const ProductsDetailScreen = () => {
    const product = products[0];

    const { width } = useWindowDimensions();

    //useWindowDimensions hook'u ile ekranın genişliği (width) ve 
    //yüksekliği (height) alınır ve bu değerler ekranda görüntülenir.
    // Ekran boyutları değiştiğinde (örneğin, cihaz döndürüldüğünde), 
    //bu değerler otomatik olarak güncellenir ve bileşen yeniden render edilir.
    return (
        <View>
            <ScrollView>


                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (

                        <Image
                            source={{ uri: item }}
                            style={{ width, aspectRatio: 1 }} //aspectRatio width e göre heigh yi otomatik ayarlıyor
                        />
                    )}
                    horizontal // yan yana yapıyor
                    showsHorizontalScrollIndicator={false} // çubuğu kaldırır
                    pagingEnabled // flatlisti centerlıyor
                />
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{product.name}</Text>

                    <Text style={styles.price}>${product.price}</Text>

                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>



        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.3
    },
    description: {
        marginVertical: 10, // üst ve alt kenarlara 20 birimlik marj ekler
        fontSize: 18,
        lineHeight: 30, // satır yüksekliği için kullanılır çok metin varsa kullan
        fontWeight: '300'
    }

});

export default ProductsDetailScreen
