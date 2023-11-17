import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CoustomButton from "../common/CoustomButton";
import { useNavigation } from "@react-navigation/native";



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
        <CoustomButton
          title={"clickme"}
          onPress={() => navigateToScreen("shareDetails")}
          style={styles.btn}
        />
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

    
  }
});
