import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import PhoneVerification from "../components/PhoneVerification/PhoneVerification";
import ReelsScreen from "../screen/reels";
import ProfileScreen from "../screen/profile";
import NotificationsScreen from "../screen/notification";
import Post from "../screen/post";
import AddPost from "../screen/addpost";
import ShareDetailsScreen from "../screen/sharedetails";


const Stack = createNativeStackNavigator();

export default SignedInStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      statusBarColor: "black",
      contentStyle: { backgroundColor: "#000" },
    }}
    initialRouteName="post"
  >
    <Stack.Screen name="home" component={Home}/>
    <Stack.Screen name="register" component={Register}/>
    <Stack.Screen name="verification" component={PhoneVerification}/>
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="post" component={Post} />
    <Stack.Screen name="reels" component={ReelsScreen} />
    <Stack.Screen name="addPost" component={AddPost} />
    {/* <Stack.Screen name="postdetais" component={PostDetail} /> */}
    <Stack.Screen name="profile" component={ProfileScreen} />
    <Stack.Screen name="sharedetails" component={ShareDetailsScreen} />
    <Stack.Screen name="notifications" component={NotificationsScreen} />
  </Stack.Navigator>
);




// export const SignedInStack = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//       statusBarColor: "black",
//       contentStyle: { backgroundColor: "#000" },
//     }}
//     initialRouteName="post"
//   >
//     <Stack.Screen name="post" component={Post} />
//     <Stack.Screen name="reels" component={ReelsScreen} />
//     <Stack.Screen name="addPost" component={AddPost} />
//     {/* <Stack.Screen name="postdetais" component={PostDetail} /> */}
//     <Stack.Screen name="profile" component={ProfileScreen} />
//     <Stack.Screen name="notifications" component={NotificationsScreen} />
//   </Stack.Navigator>
// );

// export const SignedOutStack = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//       statusBarColor: "black",
//       contentStyle: { backgroundColor: "#000" },
//     }}
//     initialRouteName="home"
//   >
//     <Stack.Screen name="home" component={Home} />
//     <Stack.Screen name="register" component={Register} />
//     <Stack.Screen name="verification" component={PhoneVerification} />
//     <Stack.Screen name="login" component={Login} />
//   </Stack.Navigator>
// );

// export ANDROID_HOME=$HOME/Android/Sdk
// export PATH=$PATH:$ANDROID_HOME/tools
