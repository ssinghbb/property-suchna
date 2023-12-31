import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import CoustomButton from "../common/CoustomButton";
import {
  OTPInputContainer,
  SplitOTPBoxesContainer,
  TextInputHidden,
  SplitBoxes,
  SplitBoxText,
  SplitBoxesFocused,
} from "./styles";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../../constants/constant";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import globalStyles , { themeStyles } from "../../../styles";
import { storeData } from "../../utils/asyncStorageHandler";


export default function PhoneVerification({ route, navigation }) {
  console.log(route.params, "params-------1");
  const { t } = useTranslation();
  const inputRef = useRef();
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const maximumLength = 6;
  const [code, setCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const boxArray = new Array(maximumLength).fill(0);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;
    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;
    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    );
  };
  const handleVerifyCode = () => {
    // console.log("code.length", code.length);

    try {
      setLoader(true);
      const userObject = {
        fullName: route.params.fullName,
        phoneNumber: `+91${route.params.phoneNumber}`,
        password: route.params.password,
        confirmPassword: route.params.confirmPassword,
        code: code,
      };
      let url = `${EXPO_PUBLIC_API_URL}auth/verify`;
      axios.post(url, userObject).then((response) => {
        // console.log("response.data", response);
        
        dispatch(setUser(userObject));
        storeData("user", userObject);
        setTimeout(() => {
          Alert.alert("Registration Done!!");
          navigation.navigate("login");
        }, 2000);
      });
      // .catch((err) => {
      //   setLoader(false);
      //   console.log("api Erorr: ", err?.response?.data);
      //   Alert.alert("Error", err?.response?.data?.message);
      // });
    } catch (error) {
      setLoader(false);
      console.log("error:", error);
      Alert.alert("Error", error);
    }
  };

  return (
    <>
      <View style={Styles.pageContainer}>
        <ScrollView style={Styles.formContainer}>
          <View style={Styles.imgStyle}>
            <Image
              style={Styles.logo}
              source={require("../../../assets/logo.png")}
            />
            <Text style={Styles.text}>
              {t("verification.heading")} {route?.params?.phoneNumber}
            </Text>
          </View>

          <OTPInputContainer>
            <SplitOTPBoxesContainer onPress={handleOnPress}>
              {boxArray.map(boxDigit)}
            </SplitOTPBoxesContainer>
            <TextInputHidden
              value={code}
              onChangeText={setCode}
              maxLength={maximumLength}
              ref={inputRef}
              onBlur={handleOnBlur}
            />
          </OTPInputContainer>

          {/* <View style={Styles.secondText}>
            <Text>Trying to Auto Capture </Text>
          </View> */}
        </ScrollView>
        <View style={Styles.btnContainer}>
          {loader ? (
            <ActivityIndicator size={"large"} color="white" />
          ) : (
            <CoustomButton
              title={t("verification.verify")}
              disable={code.length !== 6 ? true : false}
              // onPress={() => navigation.navigate("post")}
              onPress={handleVerifyCode}
            />
          )}
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 12,
    paddingLeft: 12,
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
    width: 135,
    marginBottom: 15,
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
