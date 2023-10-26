import { View, Text ,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import BottomNavbar from '../components/BottomNavbar/bottomNavbar'

export default function Layout({children}) {
  return (
    <SafeAreaView style={styles.screenContainer}>
    <View style={styles.screenSection}>
       {children}
    </View>
    <View >
   <BottomNavbar/>
    </View>
 </SafeAreaView>
  )


 
}

const styles=StyleSheet.create({
 
    screenSection:{
        flex:1,
    },

    screenContainer:{
       flex:1,
       position:'relative'
       
    }
})