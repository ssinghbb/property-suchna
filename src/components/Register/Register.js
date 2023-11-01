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


export default function Register({ navigation }) {
  const { t } = useTranslation();

  const handleSubmit=async (value)=>{
    // const data={
    //    fullName:'keerti',
    //    password:'12345',
    //    confirmPassword:'12345'
    // }
    try {
       axios.post('http://192.168.43.177:3000/auth/register',value).then(res=>{
        console.log(res,'response');
      }).catch((error)=>{
        console.log('erhhgdfjlg',error?.message);
      })
      navigation.navigate("verification");
    } catch (error) {
      console.error('API Error:', error?.data);
      Alert.alert('Error', 'An error occurred while processing your request. Please try again.');
    }
  }


  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit:(values) => {
       console.log("Form data:", values);
       handleSubmit(values)
    },
  });
  const handleApi = async () => {
    // console.log("call", JSON.stringify(formik.values))

    axios.post('https://property-suchna.onrender.com/auth/register', JSON.parse(JSON.stringify(formik.values))).then(response => {
      console.log(response.data)
    }).catch(err => {
      console.log("api Erorr: ", err.response.data)
    })
    // console.log("Form data:", values);
    // const apiUrl = process.env.EXPO_PUBLIC_API_URL || 'https://property-suchna.onrender.com/auth/register';
    // console.log("apiUrl:", apiUrl)

    // console.log("procc", process.env.API_URL)

    // try {
    //   const response = await axios.post(apiUrl, formik.values);
    //   console.log("res", response);
    //   navigation.navigate("verification");
    // } catch (error) {
    //   console.error("errore", error);
    // }
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
        <Button title="Continue" onPress={formik.handleSubmit} />  
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
