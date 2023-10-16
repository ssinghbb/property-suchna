import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import CoustomButton from "../common/CoustomButton";
import RadioButtons from "../common/coustomRadioButton";
import {
    OTPInputContainer,
    SplitOTPBoxesContainer,
    TextInputHidden,
    SplitBoxes,
    SplitBoxText,
    SplitBoxesFocused,
} from "./styles";
export default function PhoneVerification() {
const maximumLength=5
const [code, setCode] = useState("");
const [isPinReady, setIsPinReady] = useState(false);


    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();
  
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
    return (
        <>
            <View style={Styles.pageContainer}>
                <ScrollView style={Styles.formContainer}>
                    <View style={Styles.imgStyle}>
                        <Image
                            style={Styles.logo}
                            source={require("../../../assets/logo.png")}
                        />
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

                </ScrollView>
                <View style={Styles.btnContainer}>
                    <CoustomButton title={"Verify"} />
                </View>
            </View>
        </>
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
