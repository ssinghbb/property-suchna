import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import globalStyles, { themeStyles } from "../../styles";
import Layout from "./Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomeButton from "../components/common/CoustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { removeLocalStorage } from "../utils/asyncStorageHandler";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";
import { useState } from "react";

const Profile = () => {
  const [media, setMedia] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const user = useSelector((state) => state.user.user);
  // console.log("user in profile:", user?.user);
  let currentUser = user?.user;
  const dispatch = useDispatch();

  let userId = user?.user?._id;
  console.log("userId", userId);
  const handleLogout = () => {
    console.log("logout");
    dispatch(setUser());
    removeLocalStorage("user");
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("fullName is required"),
    phoneNumber: Yup.string().required("phoneNumber is required"),
  });

  const formik = useFormik({
    initialValues: {
      userId: userId,
      fullName: currentUser?.fullName || "",
      phoneNumber: currentUser?.phoneNumber || "",
      bio: currentUser?.bio || ""

    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
      console.log("check submit");
      handleUpdate(values);
    },
  });

  const handleUpdate = async (values) => {
    try {
      setIsLoading(true)
      let url = `${EXPO_PUBLIC_API_URL}auth/update`;
      const formData = new FormData();
      formData.append("userId", values.userId);
      formData.append("fullName", values.fullName);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("bio", values.bio);
      if (file) {
        formData.append("file", {
          uri: file,
          type: "image/png",
          name: "image.png",
        });
      }
      console.log("formData", formData);
      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("API response:", response?.data);

      const updatedUser = response?.data
      dispatch(setUser({ user: updatedUser }));


      formik.setValues({
        ...formik.values,
        fullName: updatedUser.fullName,
        phoneNumber: updatedUser.phoneNumber,
        bio: updatedUser.bio,

      });
      setIsLoading(false)
      Alert.alert("User updated successfully");
    } catch (error) {
      setIsLoading(false)

      console.log("error", error);
      Alert.alert("error updated userDetails")
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setMedia(result.assets[0].uri);
        setFile(result.assets[0].uri);
      } else {
        setMedia(null);
        setFile(null);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };


  return (
    <Layout>
      <ScrollView style={globalStyles.flex1}>
        <View style={styles?.header}>
          <Text
            style={[
              globalStyles.secondaryColor,
              { fontWeight: "800", fontSize: 22 },
            ]}
          >
            Profile
          </Text>
          <Button title="logout" onPress={handleLogout} />
        </View>
        <View style={styles.user}>
          <Pressable onPress={pickImage} style={styles.profileContainer}>
            <Image
              source={{
                uri: media || user?.user?.url,
              }}
              style={styles.avatar}
            />
            <View style={styles.editContainer}>
              <Text style={styles.editTitle}>Edit Image</Text>
              <Icon name="pencil" color="gray" size={15} />
            </View>
          </Pressable>
          <View style={styles.form}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Name :</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={"gray"}
                value={formik.values.fullName}
                onChangeText={formik.handleChange("fullName")}
                onBlur={formik.handleBlur("fullName")}
                error={formik.touched.fullName && formik.errors.fullName}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={[styles.input, { color: 'gray' }]}
                placeholder="User Name"
                placeholderTextColor={"gray"}
                value={formik.values.phoneNumber}
                // onChangeText={formik.handleChange("phoneNumber")}
                editable={false}
                onBlur={formik.handleBlur("phoneNumber")}
                error={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Bio :</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your bio"
                placeholderTextColor={"gray"}
                value={formik.values.bio}
                onChangeText={formik.handleChange("bio")}
                onBlur={formik.handleBlur("bio")}
                error={formik.touched.bio && formik.errors.bio}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {isLoading ?
          <ActivityIndicator size={'large'} color='white' />
          :
          <CustomeButton title={"Update"} onPress={formik.handleSubmit} />}
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  form: {
    marginTop: 40,
  },

  fieldContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: themeStyles.secondaryColor,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  label: {
    color: themeStyles.secondaryColor,
    width: "50%",
  },
  input: {
    color: themeStyles.secondaryColor,
    width: "50%",
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  editTitle: {
    color: themeStyles.secondaryColor,
    fontSize: 14,
  },
  user: {
    marginTop: 50,
    flexDirection: "column",
  },
  profileContainer: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    alignItems: "center",
    padding: 10,
    borderBottomColor: themeStyles.secondaryColor,
    borderBottomWidth: 1,
    fontWeight: "700",
  },
  avatar: {
    width: 70,
    height: 70,
    objectFit: "cover",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    borderColor: themeStyles.primaryColor,
    borderWidth: 1,
  },
});

export default Profile;
