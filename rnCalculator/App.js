import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Keyboard from './components/Keyboard'
import Display from './components/Display'
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(0);
  
  const handlePress = (value) => {
    if (value === "=") {
      setResult(eval(items.join('')));
      setItems([]);
      return
    }
    const itemsCopy = [...items, value]
    setItems(itemsCopy);
    setResult(itemsCopy.join(''));
    console.log(value);
  }
  return (
    <View style={styles.container}>
      <Header />
      <Display result={result}/>
      <Keyboard handlePress={handlePress} />
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
