import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {Home,PrivacyScreen,ContactsScreen,Explore} from './src/Screens'
export default function App() {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <>
            
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="PrivacyScreen" component={PrivacyScreen}/>
            <Stack.Screen name="ContactsScreen" component={ContactsScreen}/>
            <Stack.Screen name="Explore" component={Explore}/>
      </>
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}