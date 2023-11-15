import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useFormik } from "formik";
import InputField from "../common/InputField";
import { validationSchema } from "./validationSchema";
import RadioButtons from "../common/coustomRadioButton";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";



export default function Register({ navigation }) {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(false)

  //from validation
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values:", values)
      // console.log("Form data:", values);
      console.log("check submit")
      handleApi()
    },
  });
  //handle send otp
  const handleApi = async () => {
    setLoader(true)
    try {
      //let url = `${EXPO_PUBLIC_API_URL}sendotp`
      let url = "http://192.168.43.177:3000/auth/register"
      const result= await axios.post(url,{ phoneNumber: `+91${formik.values.phoneNumber}` })

     console.log(result);
      if(result.data)
      navigation.navigate("verification", formik.values);

    } catch (error) {
      console.log("error:", error)
      Alert.alert('Error', 'An error occurred while processing your request. Please try again.');
    }
    setLoader(false)
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
          placeholder={t("register.enterYourName")}
          label={t("register.name")}
          value={formik.values.fullName}
          onChangeText={formik.handleChange("fullName")}
          onBlur={formik.handleBlur("fullName")}
          error={formik.touched.fullName && formik.errors.fullName}
        />
        <InputField
          placeholder={t('register.enterYourPhoneNo')}
          label={t("register.phone")}
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

        {loader ?
          <ActivityIndicator size={'large'} color='white' />

          :
          <Button title={t('register.continue')} onPress={formik.handleSubmit} />}
        {/* <Button title="Continue" onPress={handleApi} /> */}
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
