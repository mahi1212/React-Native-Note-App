import {
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signup({ navigation }) {
  const [gender, setGender] = useState(null)

  const genderOptions = ["Male", "Female"];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.Inputcontainer}>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Full Name" />
        <Input placeholder="Age" />
        <View>
          <Text style={{marginVertical: 20}}>Select gender</Text>
        </View>
        {genderOptions.map((option) => {
          const selected = option === gender
          return(
            <Pressable onPress={()=> {setGender(option)}} style={styles.radioContainer} key={option}>
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
      </View>

      {/* link to SIGNIN*/}
      <View style={styles.link}>
        <Button
          title="Signup"
          customStyles={{ alignSelf: "center", marginBottom: 20 }}
        />
        <Pressable
          style={{ flexDirection: "row" }}
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text>Already have an account? </Text>
          <Text style={{ color: "green" }}>Signin</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  noteText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 20,
  },
  Inputcontainer: {
    paddingHorizontal: 10,
    marginVertical: 40,
  },
  link: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30,
  },
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
});
