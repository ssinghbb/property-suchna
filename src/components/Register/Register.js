import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useFormik } from "formik";
import InputField from "../common/InputField";
import { validationSchema } from "./validationSchema";
import RadioButtons from "../common/coustomRadioButton";

export default function Register({ navigation }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
      navigation.navigate("verification");
    },
  });
  return (
    <View style={Styles.pageContainer}>
      <ScrollView style={Styles.formContainer}>
        <View style={Styles.imgStyle}>
          <Image
            style={Styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>
        <Text style={Styles.text}>Register yourself</Text>
        <InputField
          placeholder="Enter your name"
          label={"Name"}
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          error={formik.touched.name && formik.errors.name}
        />
        <InputField
          placeholder="Enter your phone"
          label={"Phone"}
          value={formik.values.phone}
          onChangeText={formik.handleChange("phone")}
          onBlur={formik.handleBlur("phone")}
          error={formik.touched.phone && formik.errors.phone}
        />
        <InputField
          placeholder="Enter password"
          label={"Password"}
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          error={formik.touched.password && formik.errors.password}
        />
        <InputField
          placeholder="Re-enter your password"
          label={"Confirm password"}
          secureTextEntry
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange("confirmPassword")}
          onBlur={formik.handleBlur("confirmPassword")}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <View>
          <Text style={Styles.brokerLabel}>Are you a Broker ?</Text>
        </View>
        <View>
          <RadioButtons />
        </View>
      </ScrollView>
      <View style={Styles.btnContainer}>
        <Button title="Continue" onPress={formik.handleSubmit} />
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
    marginTop: 20,
  },
  text: {
    color: "white",
    marginBottom: 27,
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
    marginBottom: 4,
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
