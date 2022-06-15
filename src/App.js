import { View, StyleSheet } from 'react-native';
import Calculator from './components/Calculator';
import React from "react";
import { useState } from 'react'


export default function App() {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => theme === 'light' ? setTheme('dark'): setTheme('light')
    
    return (
        <View style={theme === 'light' ? (styles.container__light):(styles.container__dark)}>
        <Calculator theme={theme} changeTheme={changeTheme} />
        </View>
    );
}

const styles = StyleSheet.create({
    container__light: {
      backgroundColor: '#cfe6f1',
      minHeight: "100vh",
    },
    container__dark: {
      backgroundColor: '#936bb4',
      minHeight: "100vh"
    },
})
