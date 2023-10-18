import { Button, Text, View, StyleSheet } from "react-native";
import BottomNavBar  from '../components/BottomNavbar/bottomNavbar'

const Post = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.postPage}>
        <Text style={styles.text}>welcom to post page</Text>
        </View>
        <View>
         <BottomNavBar/>
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
  postPage:{
    flex:1,
  }
});

export default Post;
