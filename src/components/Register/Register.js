import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import CoustomButton from "../common/CoustomButton";

export default function Register() {
  return (
    <View style={Styles.pageContainer}>
      <ScrollView style={Styles.formContainer}>
        <View style={Styles.imgStyle}>
          <Image style={Styles.logo} source={require("../../../assets/logo.png")} />
        </View>

        <Text style={Styles.text}>Register your self </Text>

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Enter your name"
            placeholderTextColor={"gray"}
          />
        </View>

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Enter phone"
            placeholderTextColor={"gray"}
          />
        </View>

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Enter password"
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Re-enter password"
            placeholderTextColor={"gray"}
          />
        </View>
        <View>
          <Text style={Styles.brokerLabel}>Are you a Broker ?</Text>
        </View>
      </ScrollView>
      <View style={Styles.btnContainer}>
        <CoustomButton title={"Continue"}/>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    marginTop:100,
    
  },
  text: {
    color: "white",
    marginBottom: 27,
  },
  imgStyle: {
    alignItems: "center",
    marginVertical: 55,
  },
  logo:{
  height:45,
  width:90,
  },
  input: {
    borderRadius: 5,
    borderColor: "#29D4FF",
    borderWidth: 1,
    color: "white",
    height: 40,
    paddingLeft: 12,
  },
  inputContainer: {
    marginBottom: 20,
  },
  brokerLabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  btnContainer: {
    paddingVertical: 12,
    borderColor: "gray",
    borderTopWidth: 1,
  },
  // btn: {
  //   backgroundColor: "#29D4FF",
  //   alignItems: "center",
  //   padding: 12,
  //   borderRadius: 4,
  // },
});
