import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import EntypoIcon from "react-native-vector-icons/Entypo";


export default function PostManu() {
  return (
    <View>
      <Pressable style={styles.manuIcon}>
          <EntypoIcon
            color={"white"}
            name={"dots-three-vertical"}
            size={20}
            />
      </Pressable>
    </View>
  )
}
const styles= StyleSheet.create({
    manuIcon:{
        // flexDirection:"row-reverse",
       // padding: 2,
        paddingTop: 20,
      },
}) 