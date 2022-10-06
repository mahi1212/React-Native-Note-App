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
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={require("../../assets/signin.png")} style={{ width: "100%", height: 300 }} />
      <Text style={styles.noteText}>Never forget your notes</Text>
      <View style={styles.Inputcontainer}>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" secureTextEntry />
        
      </View>

      {/* link to signUp*/}
      <View style={styles.link} >
        <Button title="Signin" customStyles={{ alignSelf: "center", marginBottom: 20 }} ></Button>
        <Pressable style={{flexDirection: 'row'}} onPress={()=> {navigation.navigate("Signup")}}>
          <Text>Don't have an account? </Text>
          <Text style={{ color: "green" }}>Signup</Text>
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
    justifyContent: 'flex-end',
    alignItems: "center",
    paddingBottom: 30,
  }
});
