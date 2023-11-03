

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import CustomeButton from "../components/common/CoustomButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import axios from "axios";

const PostDetails = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      userId: "653a504fb064b9c494fd7d5b",
      caption: "",
      location: "",
      description: "",
      userName: "keerti",
    },
    onSubmit: (values) => {
      console.log("Form data:", values);
      handleSubmit(values);
    },
  });



  const handleSubmit = async (values) => {
    console.log("handelvalu", values);
    try {
    // const apiUrl = "https://property-suchna.onrender.com";
       const apiUrl = "http://192.168.1.41:3000/post/upload";

      const formData = new FormData();
      formData.append("userId", values.userId);
      formData.append("caption", values.caption);
      formData.append("location", values.location);
      formData.append("description", values.description);
      formData.append("userName", values.userName);
      formData.append("file", {
        uri: file,
        type: 'image/png',
        name: 'profile2.png',
      });
      console.log("fromData....", formData);

      // const response = await axios.post(
      //   apiUrl,
      //   JSON.parse(JSON.stringify(formData)),
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      // const response = await axios.post(apiUrl,JSON.parse (JSON.stringify(formData))
      // //    ,{
      // //   headers: {
      // //     "Content-Type": "multipart/form-data",
      // //   },

      // //   body: formData,
      // // }
      // );

      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("API response:", response?.data);
      // navigation.navigate("NextScreen");
    } catch (error) {
      console.error("API error:", error?.response?.data);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.PostDetails}>
        <View style={styles.detailsFirstContainer}>
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
              value={formik.values.caption}
              onChangeText={formik.handleChange("caption")}
              onBlur={formik.handleBlur("caption")}
            />
            <View>
              <Image
                style={styles.secImg}
                source={{uri:file}}
                
              />
            </View>
          </View>
          <View style={styles.form}>
            {/* <View style={styles.fieldContainer}>
              <Text style={styles.label}> userId :</Text>
              <TextInput
                style={styles.input}
                placeholder="userId"
                placeholderTextColor={"gray"}
                value={formik.values.userId}
                onChangeText={formik.handleChange("userId")}
                onBlur={formik.handleBlur("userId")}
              />
            </View> */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}> Add location :</Text>
              <TextInput
                style={styles.input}
                placeholder="location"
                placeholderTextColor={"gray"}
                value={formik.values.location}
                onChangeText={formik.handleChange("location")}
                onBlur={formik.handleBlur("location")}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Description :</Text>
              <TextInput
                style={styles.input}
                placeholder="description"
                placeholderTextColor={"gray"}
                value={formik.values.description}
                onChangeText={formik.handleChange("description")}
                onBlur={formik.handleBlur("description")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomeButton title={"post"} onPress={formik.handleSubmit} />
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
  imgSection: {},
  img: {
    width: 40,
    height: 40,
  },
  secImg: {
    width: 100,
    height: 100,
  },
  label: {
    color: "white",
    width: "50%",
  },
  form: {
    marginTop: 40,
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
