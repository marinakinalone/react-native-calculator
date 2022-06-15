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
      // handles change of theme
      if (input === "🌙" || input === "☀️") {
        changeTheme();
        return
      }
      // press "=" displays result and clean expression
      if (value === "=") {
        const result = eval(expression.join('').replace(/÷/, "/").replace(/(\+|-|\/|\*)+$/,""))
        console.log(result)
        if (result == false || result === undefined) {
          resetStates()
          return
        } 
        setResult(result);
        setExpression([]);
        return
      }
      let currentInput = [...expression, value]
      // press "del" deletes the last value added
      if (value === 'del') {
        currentInput.pop()
        currentInput.pop()
      }
      // press two operators buttons in a row removes the first operator added
      if (/(\+|-|÷|\*)/.test(value) === true && /(\+|-|÷|\*)/.test(expression[expression.length-1])) {
        const newExpression = expression.slice(0, -1)
        currentInput = [...newExpression, value]
      }
      // press "AC" reset to 0, default state if expression empty 
      if (currentInput == false || value === 'AC') {
        resetStates()
        return
      };
      setExpression(currentInput);
      setResult(currentInput.join(''));
    }
    return (
        <View style={theme === 'light' ? (styles.container__light):(styles.container__dark)}>
            <View style={theme === 'light' ? (styles.webcontainer__light):(styles.webcontainer__dark)}>
            <Display result={result} theme={theme} />
            {theme === 'light' ? (
              <Keyboard handlePress={handlePress} keyboardTheme={btnValuesLight} theme={theme} />
            ):(
              <Keyboard handlePress={handlePress} keyboardTheme={btnValuesDark} theme={theme} />
            )}
            </View>
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
  webcontainer__light: {
    maxWidth: 350,
    margin: "auto",
    padding: 25,
    borderRadius: 50,
    boxShadow: "35px 35px 70px #b0c4cd, -35px -35px 70px #eeffff",
  },
  webcontainer__dark: {
    maxWidth: 350,
    margin: "auto",
    padding: 25,
    borderRadius: 50,
    boxShadow: "35px 35px 70px #7d5b99, -35px -35px 70px #a97bcf",
  },

});

export default Calculator;