// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Pressable,
//   ScrollView,
// } from "react-native";
// import React from "react";
// import ButtomNavbar from "../components/BottomNavbar/bottomNavbar";
// import { useNavigation } from "@react-navigation/native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { themeStyles } from "../../styles";

// export default function UserAccount() {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.mainSection}>
//       <ScrollView style={styles.SecondSection}>
//         <View style={styles.backSection}>
//           <Pressable
//             onPress={() => navigation.navigate("post")}
//             style={{
//               flexDirection: "row",
//               gap: 30,
//               alignItems: "center",
//               padding: 10,
//             }}
//           >
//             <FontAwesome name="long-arrow-left" color={"white"} size={30} />
//             <Text style={styles.name}>Post</Text>
//           </Pressable>
//         </View>
//         <View style={styles.profileContainer}>
//           <View style={styles.profileSection}>
//             <Image
//               style={styles.profileImg}
//               source={require("../../assets/comment1.png")}
//             />
//             <View style={styles.totalPost}>
//               <Text style={styles.postName}>Post</Text>
//               <Text style={styles.postName}>10</Text>
//             </View>
//             <View style={styles.totalPost}>
//               <Text style={styles.postName}>Reels</Text>
//               <Text style={styles.postName}>10</Text>
//             </View>
//           </View>
//           <View style={styles.commentText}>
//             <Text style={styles.profileName}>keerti</Text>
//             <Text style={styles.profileName}>caption put ....</Text>
//             <Text style={styles.profileName}>caption put caption ....</Text>
//             <Text style={styles.profileName}>caption put caption here....</Text>
//           </View>
//         </View>
//         <View style={styles.postContainer}>
//           <View style={styles.img}>
//             <Image
//               style={styles.post}
//               source={require("../../assets/post3.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post3.png")}
//             />
//           </View>
//           <View style={styles.img}>
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post2.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//           </View>
//           <View style={styles.img}>
//             <Image
//               style={styles.post}
//               source={require("../../assets/post3.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post2.png")}
//             />
//           </View>
//           <View style={styles.img}>
//             <Image
//               style={styles.post}
//               source={require("../../assets/post2.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post3.png")}
//             />
//           </View>
//           <View style={styles.img}>
//             <Image
//               style={styles.post}
//               source={require("../../assets/post4.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post2.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//           </View>
//           <View style={styles.img}>
//             <Image
//               style={styles.post}
//               source={require("../../assets/post3.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post4.png")}
//             />
//           </View>
//           <View style={styles.img}>
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post3.png")}
//             />
//             <Image
//               style={styles.post}
//               source={require("../../assets/post1.png")}
//             />
//           </View>
//         </View>
//       </ScrollView>
//       <View>
//         <ButtomNavbar />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainSection: {
//     flex: 1,
//   },
//   SecondSection: {
//     flex: 1,
//   },
//   name: {
//     color: "#D9D9D9",
//     fontSize: 12,
//     fontWeight: "600",
//   },
//   profileContainer: {
//     paddingHorizontal: 20,
//     borderBottomColor: "gray",
//     borderBottomWidth: 1,
//   },
//   //   profileContainer: {
//   //     flexDirection: "row",
//   //   },
//   profileSection: {
//     flexDirection: "row",
//   },
//   profileImg: {
//     width: 50,
//     height: 50,
//     objectFit: "cover",
//     borderRadius: 50,
//     display: "flex",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: themeStyles.primaryColor,
//     // flexDirection: "row",
//     // justifyContent:  'space-around',
//   },
//   totalPost: {
//     // maxWidth: "40%",
//     paddingHorizontal: "15%",
//     paddingTop: "1%",
//   },
//   postName: {
//     color: "#D9D9D9",
//     fontSize: 15,
//     fontWeight: "800",
//   },
//   commentText: {
//     maxWidth: "75%",
//     paddingVertical: "2%",
//   },
//   profileName: {
//     color: "#D9D9D9",
//     fontSize: 13,
//     fontWeight: "400",
//   },
//   postContainer: {
//     flexDirection: "colum",
//   },
//   img: {
//     flexDirection: "row",
//   },
//   post: {
//     width: "35%",
//     height: 150,
//     // padding: "auto",
//     borderWidth: 1,
//     borderColor: "white",
//     //flexDirection:"row",
//   },
// });





import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Pressable, Alert } from "react-native";
import Lightbox from "react-native-lightbox";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ButtomNavbar from "../components/BottomNavbar/bottomNavbar";
import { useNavigation } from "@react-navigation/native";
import { themeStyles } from "../../styles";
import { EXPO_PUBLIC_API_URL } from "../constants/constant";

export default function UserAccount({post}) {
  console.log("postuserId",post?.userId);
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [userPost, setUserPost]=useState([]);

  // const data = [
  //   { id: "1", source: require("../../assets/post1.png") },
  //   { id: "2", source: require("../../assets/post3.png") },
  //   { id: "3", source: require("../../assets/post3.png") },
  //   { id: "4", source: require("../../assets/post1.png") },
  //   { id: "5", source: require("../../assets/post3.png") },
  //   { id: "6", source: require("../../assets/post4.png") },

  //   { id: "7", source: require("../../assets/post1.png") },
  //   { id: "8", source: require("../../assets/post3.png") },
  //   { id: "9", source: require("../../assets/post4.png") },
  //   { id: "10", source: require("../../assets/post1.png") },
  //   { id: "11", source: require("../../assets/post3.png") },
  //   { id: "12", source: require("../../assets/post4.png") },
  //   { id: "13", source: require("../../assets/post1.png") },
  //   { id: "14", source: require("../../assets/post3.png") },
  // ];

 useEffect( async ()=>{
  const userId= post?.userId;
  const apiUrl= `${EXPO_PUBLIC_API_URL}post/userpost/${userId}`
 console.log("userId");
  const response = await axios.get(apiUrl)
 console.log(response);
 if(response){
  console.log("post get successfully");
  Alert.alert("post get successfully");
  setUserPost(response.data.data);
 }else{
  console.log("error, get post");
  Alert.alert("error")
 }

 })
  

  const renderItem = ({ item }) => (
    <Lightbox
      activeProps={{ style: { width: "100%", height: "100%" } }}
      onOpen={() => setSelectedImage(item)}
      onClose={() => setSelectedImage(null)}
    >
      <Image style={styles.post} source={item?.posts?.url} />
    </Lightbox>
  );

  return (
    <View style={styles.mainSection}>
      <ScrollView style={styles.SecondSection}>
        <View style={styles.backSection}>
          {/* ... (your back button code) */}
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
            <Text style={styles.name}>Post</Text>
          </Pressable>
        </View>
        <View style={styles.profileContainer}>
          {/* ... (your profile section code) */}
          <View style={styles.profileSection}>
            <Image
              style={styles.profileImg}
              source={require("../../assets/comment1.png")}
            />
            <View style={styles.totalPost}>
              <Text style={styles.postName}>Post</Text>
              <Text style={styles.postName}>10</Text>
            </View>
            <View style={styles.totalPost}>
              <Text style={styles.postName}>Reels</Text>
              <Text style={styles.postName}>10</Text>
            </View>
          </View>
          <View style={styles.commentText}>
            <Text style={styles.profileName}>keerti</Text>
            <Text style={styles.profileName}>caption put ....</Text>
            <Text style={styles.profileName}>caption put caption ....</Text>
            <Text style={styles.profileName}>caption put caption here....</Text>
          </View>
        </View>
        <View style={styles.postContainer}>
        <View style={styles.img}>
          <FlatList
            data={userPost}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            numColumns={3}
          />
        </View>
        </View>
      </ScrollView>
      <View>
        <ButtomNavbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... (your other styles)
  mainSection: {
    flex: 1,
  },
  SecondSection: {
    flex: 1,
  },
  name: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "600",
  },
  profileContainer: {
    paddingHorizontal: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  //   profileContainer: {
  //     flexDirection: "row",
  //   },
  profileSection: {
    flexDirection: "row",
  },
  profileImg: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderColor: themeStyles.primaryColor,
    // flexDirection: "row",
    // justifyContent:  'space-around',
  },
  totalPost: {
    // maxWidth: "40%",
    paddingHorizontal: "15%",
    paddingTop: "1%",
  },
  postName: {
    color: "#D9D9D9",
    fontSize: 15,
    fontWeight: "800",
  },
  commentText: {
    maxWidth: "75%",
    paddingVertical: "2%",
  },
  profileName: {
    color: "#D9D9D9",
    fontSize: 13,
    fontWeight: "400",
  },

  postContainer: {
    flexDirection: "column",
    // paddingHorizontal: 5,
  },
  img: {
    flexDirection: "column",
  },
  post: {
     //flex: 1,
     aspectRatio: 1, // Maintain the aspect ratio
    margin: 4,
    borderRadius: 2,
    //width: "500%",
    height: 110,
    // padding: "auto",
    borderWidth: 1,
    borderColor: "white",
  },
});
