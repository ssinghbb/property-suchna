import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles?.login}>
      <View style={styles.container}>
        <View style={styles?.imgDiv}>
          <Image source={require("../../../assets/logo.png")} />
        </View>
        <View style={{ flex: 4 }}>
          <View style={styles?.btnDiv}>
            <Button title="Login" />
          </View>
          <View style={styles?.btnDiv}>
          <Button title="Sign Up" onPress={()=>navigation.navigate('register')}/>
          </View>
        </View>
      </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imgDiv: {
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
  },
  btnDiv: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
  },
});
