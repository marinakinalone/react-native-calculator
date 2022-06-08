import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'


const Keyboard = ({handlePress}) => {
  const btnValues = [
    "AC","del", "%", "÷","七","八","九","*","四","五","六","-","一","二","三","+","d/l", "零","点","="];
  return (
    <View style={styles.keyboard}>
      {btnValues.map((value,index) => {
        return (
          <TouchableOpacity key={index} onPress={() => {handlePress(value)}}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btn} >{value}</Text>
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
  btn: {
    width: 60,
    height: 60,
    boxShadow: "5px 5px 7px #b2c6cf, -5px -5px 7px #ecffff",
    color: 'purple',
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