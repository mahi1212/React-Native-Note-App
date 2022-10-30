import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { async } from '@firebase/util'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../App'

const noteColorOptions = ["red", "green", "blue"]
export default function Create({navigation, route, user}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [noteColor, setNoteColor] = useState("blue")
  const [loading, setLoading] = useState(false)

  const createNote = async () => {
    setLoading(true)
    try{
      await addDoc(collection(db, "notes"), {
        title:title,
        description:description,
        color:noteColor,
        uid: user.uid
      })
      setLoading(false)
    }catch(e){
      console.log(e)
      setLoading(false)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Input
          placeholder="Title"
          onChangeText={(text) => setTitle(text)}
        />
        <Input
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          multiline={true}
        />
        <View style={{ marginVertical: 10 }}>
          <Text>Select your note color: </Text>
        </View>
        {noteColorOptions.map((option) => {
          const selected = option === noteColor
          return (
            <Pressable onPress={() => { setNoteColor(option) }} style={styles.radioContainer} key={option}>
              <View
                style={[
                  styles.outerCircle,
                  selected && styles.selectedOuterCirlce,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    selected && styles.selectedInnerCirlce,
                  ]}
                />
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
          )
        })}
        <Button
          title="SUBMIT NOTE"
          customStyles={{ alignSelf: "center", marginBottom: 20, width: '100%', marginTop: 30 }}
          onPress={createNote}
        />
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: 15,
    width: 15,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  selectedOuterCirlce: {
    borderColor: "orange",
  },
  selectedInnerCirlce: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
})