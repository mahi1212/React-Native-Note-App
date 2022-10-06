import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Create from './src/screens/Create';
import Edit from './src/screens/Edit';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration

const firebaseConfig = {  
  apiKey: "AIzaSyAdK83Czpl4LTI6VKUBb8BxyBJWMgKnpxk",
  authDomain: "rn-note-app-05.firebaseapp.com",
  projectId: "rn-note-app-05",
  storageBucket: "rn-note-app-05.appspot.com",
  messagingSenderId: "76062836231",
  appId: "1:76062836231:web:558d6140e3f970feb0cca2"
};

const app = initializeApp(firebaseConfig);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  }
}
const Stack = createNativeStackNavigator();

export default function App() {
  const user = false; //not authenticated
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator >
        {
          user ? <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Edit" component={Edit} />
          </>: 
          <>
            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
