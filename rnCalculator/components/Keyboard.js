import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

const Keyboard = ({handlePress, keyboardTheme, theme}) => {

  return (
    <View style={styles.keyboard}>
      {keyboardTheme.map((value,index) => {
        return (
          <TouchableOpacity key={index} onPress={() => {handlePress(value)}}>
            <View style={styles.btnWrapper}>
              <Text style={theme === 'light' ? (styles.btn__light):(styles.btn__dark)} >{value}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}


const styles = StyleSheet.create({
  keyboard: {
   flexDirection: "row",
   justifyContent: 'center',
    alignItems: "center",
    flexWrap: 'wrap',

  },
  btnWrapper: {
    alignItems: "center",
    justifyContent: 'center',
    margin: 7

  },
  btn__light: {
    width: 60,
    height: 60,
    boxShadow: "5px 5px 7px #b2c6cf, -5px -5px 7px #ecffff",
    color: '#936bb4',
    borderRadius: 20,
    textAlign: "center",
    lineHeight: 60,
    fontSize:20,
    fontWeight:"bold"
  },
  btn__dark: {
    width: 60,
    height: 60,
    boxShadow: "5px 5px 7px #7d5b99, -5px -5px 7px #a97bcf",
    color: '#cfe6f1',
    borderRadius: 20,
    textAlign: "center",
    lineHeight: 60,
    fontSize:20,
    fontWeight:"bold"
  }
});
export default Keyboard

//TODO
// press
// background: linear-gradient(145deg, #bacfd9, #ddf6ff);
// box-shadow:  7px 7px 13px #b2c6cf, -7px -7px 13px #ecffff;