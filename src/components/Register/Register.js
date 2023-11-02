import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { useFormik } from "formik";
import InputField from "../common/InputField";
import { validationSchema } from "./validationSchema";
import RadioButtons from "../common/coustomRadioButton";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { EXPO_PUBLIC_API_URL } from '@env'



export default function Register({ navigation }) {
  const { t } = useTranslation();

  //from validation
  const formik = useFormik({
    initialValues: {
      fullName: "test",
      phoneNumber: "+919993024884",
      password: "password",
      confirmPassword: "password",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
      handleSubmit(values)
    },
  });
  //handle send otp
  const handleApi = async () => {
    // navigation.navigate("verification", formik.values);
    
    try {
      let url = `${EXPO_PUBLIC_API_URL}sendotp`
      axios.post(url, JSON.parse(JSON.stringify({ phoneNumber: formik.values.phoneNumber }))).then(response => {
        console.log(response.data)

        navigation.navigate("verification", formik.values);

      }).catch(err => {
        console.log("api Erorr: ", err.response.data)
        Alert.alert('Error', 'An error occurred while processing your request. Please try again.');

      })

    } catch (error) {
      console.log("error:", error)
      Alert.alert('Error', 'An error occurred while processing your request. Please try again.');


    }
  }


  return (
    <View style={Styles.pageContainer}>
      <ScrollView style={Styles.formContainer}>
        <View style={Styles.imgStyle}>
          <Image
            style={Styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>

        <Text style={Styles.text}>{t('register.heading')}</Text>
        <InputField
          placeholder="Enter your name"
          label={"Name"}
          value={formik.values.fullName}
          onChangeText={formik.handleChange("fullName")}
          onBlur={formik.handleBlur("fullName")}
          error={formik.touched.fullName && formik.errors.fullName}
        />
        <InputField
          placeholder="Enter your phone"
          label={"Phone"}
          value={formik.values.phoneNumber}
          onChangeText={formik.handleChange("phoneNumber")}
          onBlur={formik.handleBlur("phoneNumber")}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <InputField
          placeholder={t('register.enterYourPassword')}
          label={t('register.password')}
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          error={formik.touched.password && formik.errors.password}
        />
        <InputField
          placeholder={t('register.reEnterYourPassword')}
          label={t('register.confirmPassword')}
          secureTextEntry
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange("confirmPassword")}
          onBlur={formik.handleBlur("confirmPassword")}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <View>
          <Text style={Styles.brokerLabel}>{t('register.broker')}</Text>
        </View>
        <View>
          <RadioButtons />
        </View>
      </ScrollView>
      <View style={Styles.btnContainer}>
        {/* <Button title="Continue" onPress={formik.handleSubmit} /> */}
        <Button title="Continue" onPress={handleApi} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12
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
