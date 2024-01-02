import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import CustomeButton from "../components/common/CoustomButton";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";
import { useSelector } from "react-redux";

const PostDetails = ({ file, isVideo }) => {
  const [loader, setLoader] = useState(false);
  const user = useSelector((state) => state?.user?.user?.user);
  // console.log("video",isVideo);
  const userId = user?._id;
  const initialValues = {
    userId: userId,
    caption: "",
    location: "",
    description: "",
  }
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form data:", values);
      handleSubmit(values);

    },
  });

  const handleSubmit = async (values) => {
    console.log("handelvalu", values);
    try {
      setLoader(true);
      const apiUrl = `${EXPO_PUBLIC_API_URL}post/upload`
      console.log("values.userId:", values.userId);
      const formData = new FormData();
      formData.append("userId", values.userId);
      formData.append("caption", values.caption);
      formData.append("location", values.location);
      formData.append("description", values.description);

      if (isVideo) {
        formData.append("file", {
          uri: file,
          type: "video/mp4", // Adjust the MIME type if necessary
          name: "video.mp4",
        });
      } else {
        formData.append("file", {
          uri: file,
          type: "image/png", // Adjust the MIME type if necessary
          name: "image.png",
        });
      }
      console.log(" apiurl, fromData....", formData,apiUrl);
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
       console.log("API response:", response);
      if (response?.data) {

        formik.setValues(initialValues)
      }
      if (isVideo) {
        navigation.push("reels");
      } else {
        navigation.push("post");
      }

      setLoader(false);
    } catch (error) {
      console.log("error:", error)
      console.error("API error:", error?.response?.data);
      setLoader(false);
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
                // source={require("../../assets/comment1.png")}
                source={ {uri : user?.url}}
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
              <Image style={styles.secImg} source={{ uri: file }} />
            </View>
          </View>
          <View style={styles.form}>
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
        {loader ? (
          <ActivityIndicator size={"large"} color="white" />
        ) : (
          <CustomeButton title={"post"} onPress={formik.handleSubmit} />
        )}
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
    borderRadius: 20,
    marginTop:30,
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
