import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({placeholder, secureTextEntry}) {
  return (
    <TextInput placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry} />
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      borderBottomWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    }
  });
  