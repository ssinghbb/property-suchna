import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CoustomButton from "../common/CoustomButton";
import { useNavigation } from "@react-navigation/native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts, ZillaSlab_500Medium } from '@expo-google-fonts/dev';

export default function Header() {
  const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  let [fontsLoaded, fontError] = useFonts({
    ZillaSlab_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoSection}>
        <Text style={{ fontFamily: 'ZillaSlab_500Medium', fontSize: 30, color: 'white', fontWeight: '200' }}>Property Suchna</Text>

      </View>
      <View style={styles.btnContainer}>

        <TouchableOpacity >

          <Material color={"yellow"} name={"emoticon-cool"} size={30} height={40} width={40} />
        </TouchableOpacity>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 5
  },
  textSection: {
    color: "white",
    fontWeight: '600',
    fontSize: 30,
    textAlign: "center",
    fontFamily: 'Inter_900Black'

  },
  btn: {
    maxWidth: 20,


  },
  btnContainer: {
    // maxWidth: "50%",
    // marginVertical:10,
    // maxHeight: "90%",
    alignItems: "center",
    // paddingTop: 10,


  }
});
