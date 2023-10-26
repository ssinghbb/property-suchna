import { Text, View, StyleSheet, Button } from "react-native";
import ButtomNavbar from "../components/BottomNavbar/bottomNavbar";

const Notifications = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Notification section</Text>
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
});

export default Notifications;
