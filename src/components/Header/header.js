import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CoustomButton from "../common/CoustomButton";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Header() {
 const navigation = useNavigation();
 const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };


  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoSection}>
        <Text style={styles.textSection}>property suchana</Text>
      </View>
      <View style={styles.btnContainer}>
        
        <TouchableOpacity >
          {/* <Icon color={"white"} name={"user"} size={30}  height={40} width={40} /> */}
          <Icon color={"white"} name={"id-badge"} size={30}  height={40} width={40} />
          {/* <Icon color={"white"} name={"id-card"} size={30}  height={40} width={40} /> */}
          {/* <Icon color={"white"} name={"face-smile-beam"} size={30}  height={40} width={40} /> */}

        </TouchableOpacity>
        
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flux: 1,
     borderBottomWidth:1,
     borderColor:"gray",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:10,
  },
  textSection: {
    color: "white",
    fontWeight: '800',
    fontSize: 20,
    textAlign:"center",

  },
  btn:{
    maxWidth:20,


  },
  btnContainer:{
    maxWidth:"50%",
    // marginVertical:10,
       maxHeight:"90%",
    alignItems:"center",
    paddingTop:10,

    
  }
});
