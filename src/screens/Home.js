import { View, Text, SafeAreaView, Button, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../App';

export default function Home({ navigation, route, user }) {
  const [notes, setNotes] = useState([])

  // for getting notes on user auth changing
  useEffect(() => {
    const q = query(collection(db, "notes"), where("uid", "==", user.uid))
    const notesListenerSubscription = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((document) => {
        list.push({...document.data(), id:document.id})
      })
      setNotes(list)
    })
    return notesListenerSubscription;
  }, [])

  // Flatlist item rendering  
  const renderItem = ({ item }) => {
    const { title, color, description } = item
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('Update', { item })
        }}
        style={{ height: 100, backgroundColor: color, marginBottom: 10, borderRadius: 10, padding: 10 }}>
        <Text style={{ color: 'white', fontSize: 20 }} >{title}</Text>
        <Text style={{ color: 'white', marginTop: 10 }} >{description}</Text>
      </Pressable>)
  }
  const onPressCreate = () => {
    navigation.navigate("Create")
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={styles.header}
        >
          <Text style={{fontSize:22, fontWeight:'700'}}>My Notes</Text>
          <Pressable onPress={onPressCreate}>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </Pressable>
        </View>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtrator={(item) => item.title}
          contentContainerStyle={{ padding: 20 }}
        />
      </ScrollView>
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