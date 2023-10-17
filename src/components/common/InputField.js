import { StyleSheet, Text, TextInput, View } from "react-native";

const InputField=({label,error   ,...rest})=>{
    return(
        <View style={styles.inputContainer}>
        <Text style={styles.label}> {label}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={"gray"}
          {...rest}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    )
}
  

const styles= StyleSheet.create({
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
      error: {
        color: 'red', 
        fontSize: 12,
        marginTop: 4,
      },
}) 


export default InputField;