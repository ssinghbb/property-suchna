import { Text, View, StyleSheet, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>welcom to profile page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: "white",
    alignItems: "center",
    fontSize: 30,
    marginVertical: 100,
  },
});

export default Profile;
