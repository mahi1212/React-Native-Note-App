import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Create from './src/screens/Create';
import Update from './src/screens/Update';
import FlashMessage from "react-native-flash-message";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';
 
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
export const auth = getAuth();
export const db = getFirestore();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  }
}
const Stack = createNativeStackNavigator();

export default function App() {
  // const user = false; //not authenticated
  const[loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // checking user logged in or not
  useEffect(()=>{
    const authSubscription = onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user)
        setLoading(false)
      }else{
        setUser(null)
        setLoading(false)
      }
    })
    return authSubscription;
  }, [])

  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator >
        {
          user ? <>
            <Stack.Screen name="Home" options={{headerShown: false}}> 
              {/* Passign user in screen */}
              {(props) => <Home {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Create"> 
              {(props) => <Create {...props} user={user} />}
            </Stack.Screen> 
            <Stack.Screen name="Update" component={Update} />
          </>: 
          <>
            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        }

      </Stack.Navigator>
      <FlashMessage position="top" />
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
