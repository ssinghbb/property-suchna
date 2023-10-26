import { Text, View, StyleSheet, Button } from "react-native";
import ButtomNavbar from "../components/BottomNavbar/bottomNavbar";

const Profile = ({ navigation }) => {
  return (

    <View style={styles.mainContainer}>
      <View style={styles.profilePage}>
        <Text style={styles.text}>Profile section </Text>
      </View>
      <View>
        <ButtomNavbar />
      </View>
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
  profilePage: {
    flex: 1,
  },
});

export default Profile;
