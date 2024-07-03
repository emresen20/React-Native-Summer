import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';

import ProductsScreen from './src/data/screens/ProductsScreen';
import ProductsDetailScreen from './src/data/screens/ProductsDetailScreen';
import ShoppingCard from './src/data/screens/ShoppingCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ShoppingCard/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
