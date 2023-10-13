import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../components/Login/Login'

export default function Routes() {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        contentStyle:{backgroundColor:'#000'}
    }}>
    <Stack.Screen name="login" component={Login} />
    {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
  )
}