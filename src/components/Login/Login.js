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
import * as yup from "yup";
import InputField from "../common/InputField";
import CoustomButton from "../common/CoustomButton";

// Validation schema using Yup
const validationSchema = yup.object().shape({
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});

const Login = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form data:", values);
      navigation.navigate("post");

      // Simulate login logic
      if (
        values.phoneNumber === "yourPhoneNumber" &&
        values.password === "yourPassword"
      ) {
        // Navigate to the next screen or perform authentication logic
        console.log("Login successful!");
      } else {
        // Handle login failure
        console.log("Login failed!");
      }
    },
  });

  return (
    <View style={styles.pageContainer}>
      <ScrollView style={styles.formContainer}>
        <View style={styles.imgStyle}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>
        <Text style={styles.text}>Log in for the best property </Text>
        <Text style={[styles.text, { fontSize: 12, color: "gray" }]}>
          Enter your phone number to continue
        </Text>
        <InputField
          placeholder="Enter your phone"
          label="Phone"
          onChangeText={formik.handleChange("phoneNumber")}
          onBlur={formik.handleBlur("phoneNumber")}
          value={formik.values.phoneNumber}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <InputField
          placeholder="Enter password"
          label="Password"
          secureTextEntry
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
        />
        <Text style={[styles.text, { fontSize: 12, color: "gray" }]}>
          By continuing, you agree to Property Suchna Terms of Use and Privacy
          Policy
        </Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <CoustomButton title="Continue" onPress={formik.handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Login;
