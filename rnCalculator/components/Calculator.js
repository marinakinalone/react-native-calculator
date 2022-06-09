import React from 'react'
import Header from './Header'
import { StyleSheet, View } from 'react-native';
import Keyboard from './Keyboard'
import Display from './Display'
import { useState } from 'react'
import { kanjis } from '../helpers/kanji';

const btnValuesLight = [
  "AC","del", "%", "÷","七","八","九","*","四","五","六","-","一","二","三","+","🌙", "零","点","="];
const btnValuesDark = [
    "AC","del", "%", "÷","七","八","九","*","四","五","六","-","一","二","三","+","☀️", "零","点","="];

const Calculator = () => {
    const [expression, setExpression] = useState([]);
    const [result, setResult] = useState(0);
    const [theme, setTheme] = useState('light')

    const getLatinValue = (input) => {
      const index = kanjis.findIndex(k => k[input]);
      let value = input;
      if (index !== -1) value = kanjis[index][input];
      return value
    }

    const changeTheme = () => theme === 'light' ? setTheme('dark'): setTheme('light')
    
    const handlePress = (input) => {
      const value = getLatinValue(input);
      if (input === "🌙" || input === "☀️") {
        changeTheme();
        return
      }
      if (value === "=") {
        if (expression == false) {
          setResult(0)
          return
        } 
        setResult(eval(expression.join('').replace(/(\+|-|\/|\*)+$/,"")));
        setExpression([]);
        return
      }
      if (value === 'AC') {
        setExpression([])
        setResult(0)
        return
      }
      let currentInput = [...expression, value]
      if (value === 'del') {
        currentInput.pop()
        currentInput.pop()
      }
      if (currentInput == false) {
        setExpression([])
        setResult(0)
        return
      };
      setExpression(currentInput);
      setResult(currentInput.join(''));
    }
    return (
        <View style={theme === 'light' ? (styles.container__light):(styles.container__dark)}>
            {/* <Header  /> */}
            <Display result={result} theme={theme} />
            {theme === 'light' ? (
              <Keyboard handlePress={handlePress} keyboardTheme={btnValuesLight} theme={theme} />
            ):(
              <Keyboard handlePress={handlePress} keyboardTheme={btnValuesDark} theme={theme} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
  container__light: {
    flex: 1,
    backgroundColor: '#cfe6f1',
    padding:5,
    minHeight: "100vh"
  },
  container__dark: {
    flex: 1,
    backgroundColor: '#936bb4',
    padding:5,
    minHeight: "100vh"
  },

});

export default Calculator;