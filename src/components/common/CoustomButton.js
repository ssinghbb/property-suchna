import { Pressable, Text, StyleSheet } from "react-native";
import { themeStyles } from "../../../styles";

const CoustomButton = ({ title, onPress, disable }) => {
  return (
    <Pressable disabled={disable} style={style.btn} onPress={onPress}>
      <Text style={style.textInput}>{title}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  btn: {
    backgroundColor: themeStyles.primaryColor,
    alignItems: "center",
    padding: 12,
    borderRadius: 4,
    //  textAlign:"center",
  },
  textInput: {
    fontStyle: "normal",
    fontWeight: "800",
    textAlign:"center",
    // alignItems:"center",
  },
});
export default CoustomButton;
