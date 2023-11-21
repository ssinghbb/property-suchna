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
import * as yup from "yup";
import InputField from "../common/InputField";
import CoustomButton from "../common/CoustomButton";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import { themeStyles } from "../../../styles";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { storeData } from "../../utils/asyncStorageHandler";

const validationSchema = yup.object().shape({
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("values:", values)
      try {
        setIsLoading(true)
        let url = `${EXPO_PUBLIC_API_URL}auth/sign_in`
        console.log("url", url);
        // let url = "http://192.168.1.41:3000/auth/sign_in";
        const response = await axios.post(url, {
          phoneNumber: `+91${formik.values.phoneNumber}`,
          password: formik.values.password,
        });
        console.log("API Response:", response);
        if (response?.data?.success) {
          dispatch(setUser(response?.data?.data));
          storeData('user', response?.data?.data)

          setIsLoading(false)


          setTimeout(() => {
            // Alert.alert("Login successful!");
            navigation.navigate("post");
          }, 2000);
        } else {
          setIsLoading(false)
          console.log(response?.data);
        }
      } catch (error) {
        setIsLoading(false)

        console.error("API Error:", error);
        Alert.alert("Error", error?.response?.data?.message);
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
        <Text style={styles.text}>{t("register.logInForTheBestProperty")}</Text>
        <Text style={[styles.text, { fontSize: 12, color: "gray" }]}>
          {t("register.enterYourPhoneNumberToContinue")}
        </Text>
        <InputField
          placeholder={t("register.enterYourPhoneNo")}
          label={t("register.phone")}
          onChangeText={formik.handleChange("phoneNumber")}
          onBlur={formik.handleBlur("phoneNumber")}
          value={formik.values.phoneNumber}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          type={'numeric'}
          
        />
        <InputField
          placeholder={t("register.enterYourPassword")}
          label={t("register.password")}
          secureTextEntry
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
        />
        <Text style={[styles.text, { fontSize: 12, color: "gray" }]}>
          {t(
            "register.byContinuingYouAgreeToPropertySuchnaTermsOfUseAndPrivacyPolicy"
          )}
        </Text>
      </ScrollView>
      <View style={styles.btnContainer}>
      {isLoading ?
          <ActivityIndicator size={'large'} color='white' />

          :
          <CoustomButton
          disable={isLoading}
          title={t("register.continue")}
          onPress={formik.handleSubmit}
        />}
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
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
    borderColor: themeStyles.primaryColor,
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
