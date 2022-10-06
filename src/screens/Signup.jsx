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

export default function Signup({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Inputcontainer}>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Full Name" />
        <Input placeholder="Age" />
        <Button
          title="Signup"
          customStyles={{ alignSelf: "center", marginTop: 10 }}
        ></Button>
      </View>
      {/* link to SIGNIN*/}
      <View style={styles.link} >
        <Pressable style={{flexDirection: 'row'}} onPress={()=> {navigation.navigate("Signin")}}>
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
    justifyContent: 'flex-end',
    alignItems: "center",
    paddingBottom: 30,
  }
});
