import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import ProductsScreen from './src/data/screens/ProductsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen></ProductsScreen>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
