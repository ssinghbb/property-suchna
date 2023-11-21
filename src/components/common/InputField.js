import { StyleSheet, Text, TextInput, View } from "react-native";
import { themeStyles } from "../../../styles";

const InputField = ({ label, error,type, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}> {label}</Text>
      <TextInput style={styles.input} keyboardType={type?type:null} placeholderTextColor={"gray"} {...rest} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 4,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

export default InputField;
