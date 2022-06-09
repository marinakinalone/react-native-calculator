import React from 'react'
import { StyleSheet, View } from 'react-native';
import Keyboard from './Keyboard'
import Display from './Display'
import { useState } from 'react'
import { kanjis } from '../helpers/kanji';
import { btnValuesDark, btnValuesLight } from '../helpers/keyboards';


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

    const resetStates = () => {
      setResult(0)
      setExpression([]);
    }
    
    const handlePress = (input) => {
      const value = getLatinValue(input);
      if (input === "🌙" || input === "☀️") {
        changeTheme();
        return
      }
      if (value === "=") {
        const result = eval(expression.join('').replace(/(\+|-|÷|\*)+$/,""))
        if (result == false || result === undefined) {
          resetStates()
          return
        } 
        setResult(result);
        setExpression([]);
        return
      }
      let currentInput = [...expression, value]
      if (value === 'del') {
        currentInput.pop()
        currentInput.pop()
      }
      if (currentInput == false || value === 'AC') {
        resetStates()
        return
      };
      setExpression(currentInput);
      setResult(currentInput.join(''));
    }
    return (
        <View style={theme === 'light' ? (styles.container__light):(styles.container__dark)}>
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