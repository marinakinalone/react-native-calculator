import React from 'react'
import Header from './Header'
import Keyboard from './Keyboard'
import Display from './Display'
import { useState } from 'react'
import { kanjis } from '../helpers/kanji';

const Calculator = () => {
    const [expression, setExpression] = useState([]);
    const [result, setResult] = useState(0);

    const getLatinValue = (input) => {
      const index = kanjis.findIndex(k => k[input]);
      let value = input;
      if (index !== -1) value = kanjis[index][input];
      return value
    }
    
    const handlePress = (input) => {
      const value = getLatinValue(input);
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
        <>
            {/* <Header  /> */}
            <Display result={result}/>
            <Keyboard handlePress={handlePress} />
        </>
    )
}

export default Calculator;