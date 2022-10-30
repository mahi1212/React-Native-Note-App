import { View, Text, SafeAreaView, Button, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation, route, user }) {
  const onPressCreate = () =>{
    navigation.navigate("Create")
  } 
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>My Notes</Text>
        <Pressable onPress={onPressCreate}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
      </View>
      <StatusBar style={{ color: 'black' }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
})