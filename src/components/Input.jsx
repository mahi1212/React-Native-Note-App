import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({ placeholder, secureTextEntry, onChangeText, autoCapitalize, multiline }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry} //for pass
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize} //for email
      multiline={multiline}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
