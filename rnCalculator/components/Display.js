import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


const Display = ({result, theme}) => {
  return (
    <View style={theme === 'light' ? (styles.display__light):(styles.display__dark)}>
          <Text style={theme === 'light' ? (styles.display__result_light):(styles.display__result_dark)}>{result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    display__light: {
        marginTop: 70,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        borderRadius: 20,
        boxShadow: "inset 7px 7px 13px #b2c6cf, inset -7px -7px 13px #ecffff"
    },
    display__dark: {
      marginTop: 70,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 10,
      borderRadius: 20,
      boxShadow: "inset 7px 7px 13px #7d5b99, inset -7px -7px 13px #a97bcf"
    },
    display__result_light: {
        margin: 20,
        fontSize: 50,
        color: "#936bb4",
        textAlign:"right",
        paddingRight:20,
        borderRadius: 20,
        boxShadow: "7px 7px 13px #b2c6cf, 7px -7px 13px #ecffff"
    },
    display__result_dark: {
      margin: 20,
      fontSize: 50,
      color: "#cfe6f1",
      textAlign:"right",
      paddingRight:20,
      borderRadius: 20,
      boxShadow: "7px 7px 13px #7d5b99, 7px -7px 13px #a97bcf"
  }
  });
export default Display;