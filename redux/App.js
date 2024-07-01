import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './Store';
import { Counter } from './Counter';
import Foo from './Foo';
import Bar from './Bar';

export default function App() {
  return (
    //Provideri redux u kullanabilmek için sarmış olduk
    <Provider store={Store} >
      <View style={styles.container}>
        <Bar/>
        <Foo />
        <Counter />
        <StatusBar style="auto" />
      </View>
    </Provider>
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
