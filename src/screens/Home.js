import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <StatusBar style={{color: 'black'}} />
    </SafeAreaView>
  )
}