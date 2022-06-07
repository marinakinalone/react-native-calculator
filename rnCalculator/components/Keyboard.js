import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'


const Keyboard = () => {
  const btnValues = [
    "AC","+/-", "%", "/","7","8","9","*","4","5","6","-","1","2","3","+","0",",","="];

  const handlePress = (value) => {
    console.log(value);
    alert(value);
    return true;
  }
  return (
    <View>
      {btnValues.map((value,index) => {
        return (
          <>
          <TouchableOpacity key={index} onPress={() => {handlePress(value)}}>
            <Text >{value}</Text>
          </TouchableOpacity>
          </>
        )
      })}
    </View>
  )
}

export default Keyboard