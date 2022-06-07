import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'


const Keyboard = ({handlePress}) => {
  const btnValues = [
    "AC","+/-", "%", "/","7","8","9","*","4","5","6","-","1","2","3","+","0",",","="];


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