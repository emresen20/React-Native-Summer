import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={{
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5
      }}>
        <Text
          style={{
            color: "white",
            textAlign: "center"
          }}>
          Select Language
        </Text>
      </Pressable>

      <StatusBar style="auto" />
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
