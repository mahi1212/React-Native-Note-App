import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Create from './src/screens/Create';
import Edit from './src/screens/Edit';

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
      <Stack.Navigator>
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
