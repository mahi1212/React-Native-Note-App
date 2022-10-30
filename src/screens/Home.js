import { View, Text, SafeAreaView, Button, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../../App';
import { showMessage } from 'react-native-flash-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';

export default function Home({ navigation, route, user }) {
  const [notes, setNotes] = useState([])

  // for getting notes on user auth changing
  useEffect(() => {
    const q = query(collection(db, "notes"), where("uid", "==", user.uid))
    const notesListenerSubscription = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((document) => {
        list.push({ ...document.data(), id: document.id })
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
        <Pressable style={{ position: 'absolute', alignSelf: 'flex-end', padding: 10, zIndex: 5 }}
          onPress={() => {
            deleteDoc(doc(db, "notes", item.id))
            showMessage({
              message: 'Deleted note'
            })
          }}
        >
          <AntDesign name="delete" size={24} color="black" />
        </Pressable>
        <Text style={{ color: 'white', fontSize: 20 }} >{title}</Text>
        <Text style={{ color: 'white', marginTop: 10 }} >{description}</Text>
      </Pressable>)
  }

  const onPressCreate = () => {
    navigation.navigate("Create")
  }
  const signOutButton = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={styles.header}
        >
          <Text style={{ fontSize: 22, fontWeight: '700' }}>My Notes</Text>
          <View style={{flexDirection:'row'}}>
            <Pressable onPress={onPressCreate} style={{marginHorizontal:10}}>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </Pressable>
            <Pressable onPress={signOutButton}>
              <MaterialCommunityIcons name="logout" size={24} color="black" />
            </Pressable>
          </View>
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