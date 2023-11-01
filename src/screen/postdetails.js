import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import CustomeButton from "../components/common/CoustomButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const PostDetails = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.PostDetails}>
        <View style={styles.detailsFirstContainer}>
          <View style={styles.shareSection}>
            <Pressable
              onPress={() => navigation.navigate("addpost")}
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <FontAwesome name="long-arrow-left" color={"white"} size={30} />
              <Text style={styles.name}>New Post</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("post")}
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={styles.name}>share</Text>
            </Pressable>
          </View>
          <View style={styles.profileSection}>
            <View style={styles.imgSection}>
              <Image
                style={styles.img}
                source={require("../../assets/comment1.png")}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Write a caption"
              placeholderTextColor={"gray"}
            />
            <View>
              <Image
                style={styles.secImg}
                source={require("../../assets/profile2.png")}
              />
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>User Name :</Text>
              <TextInput
                style={styles.input}
                placeholder="UserName"
                placeholderTextColor={"gray"}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}> Add location :</Text>
              <TextInput
                style={styles.input}
                placeholder="location"
                placeholderTextColor={"gray"}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Description :</Text>
              <TextInput
                style={styles.input}
                placeholder="description"
                placeholderTextColor={"gray"}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomeButton title={"post"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  PostDetails: {
    flex: 1,
  },
  detailsFirstContainer: {},
  shareSection: {
    flexDirection: "row",
  },
  profileSection: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
    paddingLeft: 20,
    borderBottomColor: "#A4A4A4",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  imgSection: {
    
  },
  img: {
    width: 40,
    height: 40,
    // borderWidth: 1,
    // borderColor:"#29D4FF",

  },
  secImg: {
    // marginLeft: 140,
  },
  label: {
    color: "white",
    width: "50%",
  },
  form: {
    marginTop: 40,
  },
  name: {
    color: "white",
    marginRight: 200,
  },
   input: {
    color: "white",
    width: "65%",
  },
  fieldContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: "#A4A4A4",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonContainer: {
    padding: 10,
  },
});

export default PostDetails;
