import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Keyboard from './components/Keyboard'
import Display from './components/Display'
import { useState } from 'react';

export default function App() {
  const [expression, setExpression] = useState([]);
  const [result, setResult] = useState(0);
  
  const handlePress = (input) => {
    if (input === "=") {
      setResult(eval(expression.join('').replace(/(\+|-|\/|\*)+$/,"")));
      setExpression([]);
      return
    }
    if (input === 'AC') {
      setExpression([])
      setResult(0)
      return
    }
    const currentInput = [...expression, input]
    setExpression(currentInput);
    setResult(currentInput.join(''));
  }
  return (
    <View style={styles.container}>
      <Header  />
      <Display result={result}/>
      <Keyboard handlePress={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    padding:25
  }
});
