import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import BottomNavbar from "../components/BottomNavbar/bottomNavbar";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const commentsData = [
  {
    id: 1,
    name: "Keerti",
    comment:
      "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
  },

{
  id: 2,
    name: "Keerti",
    comment:
      "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
  },

  {
    id: 3,
      name: "Keerti",
      comment:
        "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
    },
    {
      id: 4,
        name: "Keerti",
        comment:
          "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
      },

      {
        id: 5,
          name: "Keerti",
          comment:
            "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
        },
        {
          id: 6,
            name: "Keerti",
            comment:
              "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
          },
          {
            id: 7,
              name: "Keerti",
              comment:
                "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
            },
            {
              id: 8,
                name: "Keerti",
                comment:
                  "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
              },
              {
                id: 9,
                  name: "Keerti",
                  comment:
                    "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
                },
                {
                  id: 10,
                    name: "Keerti",
                    comment:
                      "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
                  },
                  {
                    id: 11,
                      name: "Keerti",
                      comment:
                        "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
                    },
                    {
                      id: 12,
                        name: "Keerti",
                        comment:
                          "Welcome to this beautiful 3-bedroom, 2-bathroom home located in the heart of [Name of the Neighborhood], known for its [mention a unique feature of the neighborhood, such as parks, schools, or nearby amenities]. This property offers a warm and inviting atmosphere with a host of attractive features.",
                      },
  
];

const Notifications = () => {

  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.commentLikeSection}>
      <Image
        style={styles.profileImg}
        source={require("../../assets/comment1.png")}
      />
      <View style={styles.commentText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
      <Pressable style={styles.likeSection}>
        <Icon
          color={"white"}
          onPress={() => handleLike(item.id)}
          name={"thumbs-o-up"}
          size={20}
          
        />
      </Pressable>
    </View>
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
        <Text style={styles.name}>Comments</Text>
      </Pressable>
      <FlatList
        data={commentsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <View style={styles.navSection}>
        <BottomNavbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderColor: "#29D4FF",
    borderWidth: 1,
  },
  commentText: {
    maxWidth: "75%",
  },
  name: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "600",
  },
  comment: {
    color: "#D9D9D9",
    fontSize: 7,
  },
  navSection: {
    // Add styling for the bottom navbar section if needed
  },
});

export default Notifications;
