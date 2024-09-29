import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  // Initialize state variable to keep track of the count value.
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Text>The current value is : {count}</Text>

      {/* Button to increment the count value */}
      <Button title='click to increment' onPress={() => setCount(count + 1)} />

      {/* Button to decrement the count value */}
      <Button title='click to decrement' onPress={() => setCount(count - 1)} />

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
