import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


const Display = ({result}) => {
  return (
    <View style={styles.display}>
          <Text style={styles.display__result}>{result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    display: {
        marginTop: 70,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        borderRadius: 20,
        boxShadow: "inset 7px 7px 13px #b2c6cf, inset -7px -7px 13px #ecffff"
    },
    display__result: {
        margin: 20,
        fontSize: 50,
        color: "purple",
        textAlign:"right",
        paddingRight:20,
        borderRadius: 20,
        boxShadow: "7px 7px 13px #b2c6cf, 7px -7px 13px #ecffff"

    }
  });
export default Display;