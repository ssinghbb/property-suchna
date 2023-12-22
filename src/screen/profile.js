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
  Modal,
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
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Picker } from "@react-native-picker/picker";
import { storeData } from "../utils/asyncStorageHandler";
import { useFocusEffect } from "@react-navigation/native";

const Profile = () => {
  const { t, i18n } = useTranslation();
  const [media, setMedia] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const user = useSelector((state) => state?.user?.user);
  let currentUser = user?.user;
  // console.log("currentUser:", currentUser)
  const dispatch = useDispatch();

  let userId = user?.user?._id;
  const handleLogout = () => {
    console.log("logout");
    dispatch(setUser());
    removeLocalStorage("user");
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("fullName is required"),
  });

  const formik = useFormik({
    initialValues: {
      userId: userId,
      fullName: currentUser?.fullName || "",
      phoneNumber: currentUser?.phoneNumber || "",
      bio: currentUser?.bio || "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleUpdate(values);
    },
  });

  const handleUpdate = async (values) => {
    try {
      setIsLoading(true);
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

      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response:", response?.data)

      const updatedUser = response?.data;
      dispatch(setUser({ user: updatedUser }));

      formik.setValues({
        ...formik.values,
        fullName: updatedUser.fullName,
        phoneNumber: updatedUser.phoneNumber,
        bio: updatedUser.bio,
      });
      setIsLoading(false);
      Alert.alert("User updated successfully");
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      Alert.alert("Error updating user details");
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



  const changeLanguage = (language) => {
    console.log("language", language);
    i18n.changeLanguage(language);
    storeData("language", language);
    setSelectedLanguage(language);
  };

  useFocusEffect(
    useCallback(() => {
      console.log("useFocusEffect")
      // Trigger the loading when the screen is focused
      // setIsLoading(true);
      // fetchData();
      setPageLoading(true);
      setTimeout(() => {
        setPageLoading(false)
      }, 300);
    }, [])
  );
  return (
    <Layout>
      <View style={styles?.header}>
        <Text
          style={[
            globalStyles.secondaryColor,
            { fontWeight: "800", fontSize: 22 },
          ]}
        >
          {t("profile.profile")}
        </Text>
        <Button title={t("profile.logout")} onPress={handleLogout} />
      </View>
      {pageLoading ?
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#fff" />
        </View> :
        <>
          <ScrollView style={globalStyles.flex1}>

            <View style={styles.user}>
              <Pressable onPress={pickImage} style={styles.profileContainer}>
                <Image
                  source={{
                    uri: media || user?.user?.url,
                  }}
                  style={styles.avatar}
                />
                <View style={styles.editContainer}>
                  <Text style={styles.editTitle}>{t("profile.editImage")}</Text>
                  <Icon name="pencil" color="gray" size={15} />
                </View>
              </Pressable>
              <View style={styles.form}>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>{t("profile.name")}:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder={t("profile.name")}
                    placeholderTextColor={"gray"}
                    value={formik.values.fullName}
                    onChangeText={formik.handleChange("fullName")}
                    onBlur={formik.handleBlur("fullName")}
                    error={formik.touched.fullName && formik.errors.fullName}
                  />
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>{t("profile.phoneNumber")}:</Text>
                  <TextInput
                    style={[styles.input, { color: "gray" }]}
                    placeholder="User Name"
                    placeholderTextColor={"gray"}
                    value={formik.values.phoneNumber}
                    editable={false}
                    onBlur={formik.handleBlur("phoneNumber")}
                    error={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>{t("profile.bio")}:</Text>
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
                <View style={styles.fieldContainer}>
                  <Text style={styles.label}>{t("profile.language")}:</Text>
                  <Pressable
                    style={styles.input}
                    onPress={() => setPickerVisible(true)}
                  >
                    <Text style={styles.input}>{t(`profile.select`)}</Text>
                  </Pressable>
                  <Modal
                    visible={isPickerVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setPickerVisible(false)}
                  >
                    <View style={styles.modal}>
                      <Picker
                        selectedValue={selectedLanguage}
                        style={{ height: 100, width: 150 }}
                        onValueChange={(itemValue) => {
                          changeLanguage(itemValue);
                          setPickerVisible(false);
                        }}
                        color={"white"}
                      >
                        <Picker.Item label="English" value="en" />
                        <Picker.Item label="Hindi" value="hi" />
                      </Picker>
                    </View>
                  </Modal>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            {isLoading ? (
              <ActivityIndicator size={"large"} color="white" />
            ) : (
              <CustomeButton
                title={t("profile.update")}
                onPress={formik.handleSubmit}
              />
            )}
          </View>
        </>

      }
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center'
  },
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
  // modal: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   borderRadius: 20,
  // },
  modal: {
    margin: 40,
    marginTop: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalClose: {
    alignSelf: "flex-end",
  },
  modalCloseText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 10,
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
