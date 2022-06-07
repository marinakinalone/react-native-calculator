import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Display = ({result}) => {
  return (
    <View style={styles.display}>
        <Text style={styles.content}>{result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    display: {
       backgroundColor: 'white',
        marginTop: 80,
        fontSize: "60px",
        fontWeight: "bold"
    },
    content: {
        fontSize: 60,
        fontWeight: "bold",
        backgroundColor: "black",
        color: "white",
        textAlign:"right",
        paddingRight:20

    }
  });
export default Display;