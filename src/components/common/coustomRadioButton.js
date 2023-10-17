import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const RadioButtons = () => {
  const [checked, setChecked] = useState("yes");

  return (
    <View style={Styles.mainContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          value="yes"
          color="white"
          status={checked === "yes" ? "checked" : "unchecked"}
          onPress={() => setChecked("yes")}
        />
        <Text style={Styles.radioText}>Yes</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          value="no"
          color="white"
          status={checked === "no" ? "checked" : "unchecked"}
          onPress={() => setChecked("no")}
        />
        <Text style={Styles.radioText}>No</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  radioText: {
    color: "white",
    fontSize: 9,
  },
});

export default RadioButtons;
