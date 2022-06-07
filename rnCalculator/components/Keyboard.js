import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'


const Keyboard = ({handlePress}) => {
  const btnValues = [
    "AC","+/-", "%", "/","7","8","9","*","4","5","6","-","1","2","3","+","0",",","="];


  return (
    <View style={styles.keyboard}>
      {btnValues.map((value,index) => {
        return (
          <>
          <TouchableOpacity key={index} onPress={() => {handlePress(value)}}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btn} >{value}</Text>
            </View>
          </TouchableOpacity>
          </>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  keyboard: {
   flexDirection: "row",
    alignItems: "center",
    flexWrap: 'wrap',

  },
  btnWrapper: {
    alignItems: "center",
    justifyContent: 'center',
    margin: 10

  },
  btn: {
    width: 60,
    height: 60,
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 90,
    textAlign: "center",
    lineHeight: 60,
    fontSize:20,
    fontWeight:"bold"
  }
});
export default Keyboard