import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CoustomButton from "../common/CoustomButton";
import RadioButtons from "../common/coustomRadioButton";

export default function Login() {
  return (
    <View style={Styles.pageContainer}>
      <ScrollView style={Styles.formContainer}>
        <View style={Styles.imgStyle}>
          <Image
            style={Styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>
        <Text style={Styles.text}>Log in for the best property </Text>
        <Text style={[Styles.text, { fontSize: 12, color: 'gray' }]}>Enter your phone number to continue</Text>

        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Phone number</Text>
          <TextInput
            style={Styles.input}
            placeholder="Enter phone"
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Password</Text>
          <TextInput
            style={Styles.input}
            placeholder="Enter password"
            placeholderTextColor={"gray"}
          />
        </View>
        <Text style={[Styles.text, { fontSize: 12, color: 'gray' }]}>By continuing, you agree to Property Suchna Terms of Use and Privacy Policy  </Text>

      </ScrollView>
      <View style={Styles.btnContainer}>
        <CoustomButton title={"Continue"} />
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
    marginTop: 100,
  },
  text: {
    color: "white",
    marginBottom: 10,
  },
  imgStyle: {
    alignItems: "center",
    marginVertical: 55,
  },
  logo: {
    height: 45,
    width: 90,
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
  label: {
    color: "#FBFEFF",
    fontSize: 12,
    marginBottom: 12,
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
