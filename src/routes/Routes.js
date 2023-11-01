import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import PhoneVerification from "../components/PhoneVerification/PhoneVerification";
import BottomNavbar from "../components/BottomNavbar/bottomNavbar";
import ReelsScreen from "../screen/reels";
import ProfileScreen from "../screen/profile";
import NotificationsScreen from "../screen/notification";
import Post from "../screen/post";
import AddPost from "../screen/addpost";
import PostDetail from "../screen/postdetails";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
<<<<<<< Updated upstream

      screenOptions={{
        headerShown: false,
        statusBarColor: 'black',
        contentStyle: { backgroundColor: "#000" },

=======
      screenOptions={{
        headerShown: false,
        statusBarColor: "black",
        contentStyle: { backgroundColor: "#000" },
>>>>>>> Stashed changes
      }}
    // initialRouteName="post"
    >
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="verification" component={PhoneVerification} />
      <Stack.Screen name="login" component={Login} />
      {/* <Stack.Screen name="bottomnavbar" component={BottomNavbar} /> */}
      <Stack.Screen name="post" component={Post} />
      <Stack.Screen name="reels" component={ReelsScreen} />

      <Stack.Screen name="addPost" component={AddPost} />
      <Stack.Screen name="postdetais" component={PostDetail} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="notifications" component={NotificationsScreen} />

      {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}