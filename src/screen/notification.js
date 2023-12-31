import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import BottomNavbar from "../components/BottomNavbar/bottomNavbar";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { themeStyles } from "../../styles";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Notifications = () => {
  const { t } = useTranslation();
  const [commentsData, setCommentsData] = useState([]);
  const navigation = useNavigation();
  const [pageLoading, setPageLoading] = useState(true);

  const renderItem = ({ item }) => (
    <View style={styles.commentLikeSection}>
      <Image
        style={styles.profileImg}
        // source={require("../../assets/comment1.png")}
        source={{ uri: item?.post?.url }}
      />
      <View style={styles.commentText}>
        <Text style={styles.name}>@{item?.fullName}</Text>
        <Text style={styles.comment}>{item?.comment}</Text>
      </View>
      {/* <Pressable style={styles.likeSection}>
        <Icon
          color={"white"}
          onPress={() => handleLike(item._id)}
          name={"thumbs-o-up"}
          size={20}
        />
      </Pressable> */}
    </View>
  );

  const user = useSelector((state) => state?.user?.user?.user);
  const userId = user?._id;
  const url = `${EXPO_PUBLIC_API_URL}notification/${userId}`

  const getNotifications = async () => {
    try {
      const response = await axios.get(url);
      //  console.log('lsDNLVnlDnlhsLDIilghsildgil',response?.data);
      setCommentsData(response?.data?.data)
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);

      console.log('error', error);
    }
  }

  useEffect(() => {
  }, [])

  useFocusEffect(
    useCallback(() => {
      console.log("useFocusEffect")
      // Trigger the loading when the screen is focused
      // setIsLoading(true);
      // fetchData();
      setPageLoading(true);
      getNotifications();

    }, [])
  );

  return (
    <View style={styles.screenContainer}>
      <Pressable

        onPress={() => navigation.navigate("post")}
        style={{
          flexDirection: "row",
          gap: 30,
          alignItems: "center",
          padding: 10,
        }}
      >
        <FontAwesome name="long-arrow-left" color={"white"} size={30} />
        <Text style={styles.name}>{t("notification.comments")}</Text>
      </Pressable>
      {pageLoading ?
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#fff" />
        </View> :

        <>

          <FlatList
            data={commentsData}
            keyExtractor={(item) => item?._id?.toString()}
            renderItem={renderItem}
          />


        </>
      }
      <View style={styles.navSection}>
        <BottomNavbar />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center'
  },
  screenContainer: {
    flex: 1,
  },
  commentLikeSection: {
    flexDirection: "row",
    gap: 11,
    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  profileImg: {
    width: 37,
    height: 37,
    objectFit: "cover",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderColor: themeStyles.primaryColor,
    borderWidth: 1,
  },
  commentText: {
    maxWidth: "75%",
    width: '100%'
  },
  name: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "900",
  },
  comment: {
    color: "#D9D9D9",
    fontSize: 13,
  },
  navSection: {
    // Add styling for the bottom navbar section if needed
  },
});

export default Notifications;