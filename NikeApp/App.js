import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import ProductsScreen from './src/data/screens/ProductsScreen';
import ProductsDetailScreen from './src/data/screens/ProductsDetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsDetailScreen/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
