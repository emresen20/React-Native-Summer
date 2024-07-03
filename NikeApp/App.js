import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import Navigation from './src/navigation';
import { store } from './src/store';
export default function App() {
  return (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Navigation/>

    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
