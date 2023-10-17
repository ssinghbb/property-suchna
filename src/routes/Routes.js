import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'
import PhoneVerification from '../components/PhoneVerification/PhoneVerification'
import Post from '../components/post/post'

export default function Routes() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: '#000' }
    }}>

      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="verification" component={PhoneVerification} />
      {/* <Stack.Screen name="login" component={Login} /> */}
      {/* <Stack.Screen name="post" component={Post} /> */}

      {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  )
}