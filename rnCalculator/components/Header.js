import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Salt Calculator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop:30,
    alignItems: "center",
    color:"#fff"
  },
   headerText: {
    color:"#fff",
    fontWeight:"bold"
  }
});

export default Header