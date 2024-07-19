import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/Router';
import { ApolloProvider } from '@apollo/client';
import client from './src/Apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
       <Router/>
    </ApolloProvider>
  
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
