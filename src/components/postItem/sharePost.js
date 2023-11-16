import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { themeStyles } from '../../../styles';
//import Share from 'react-native-share';

export default function SharePost() {

// const handelShare= async()=>{
//   const shareOptions={
//    message:"this is tha test msg"
//   }
//   try {
//     const ShareResponse=await Share.open(shareOptions)
//   } catch (error) {
//     console.log("error",error);
//   }
// }



  return (
    <View>
      <TouchableOpacity >
          <Icon color={"white"} name={"share"} size={20} />
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: "center",
      paddingTop: 0,
    },
    profile: {
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
      width: "100%",
      height: 60,
      padding: 2,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      margin: 0,
    },
  
    userName: {
      color: "white",
      fontSize: 12,
      fontWeight: "600",
    },
    postImg: {
      width: "100%",
      // paddingVertical: 10,
      height: 400,
    },
    post: {
      width: "100%",
      height: 400,
    },
    likeComment: {
      flexDirection: "row",
      gap: 20,
      paddingLeft: 20,
      paddingTop: 20,
    },
    saveIconContainer: {
      paddingLeft: 220,
    },
    descriptionSection: {
      paddingVertical: 8,
      paddingLeft: 20,
    },
    description: {
      color: "white",
      fontSize: 13,
    },
  
    postPage: {
      width: "100%",
    },
    myText: {
      color: "red",
      fontSize: 16,
      textAlign: "center",
    },
    postCard: {
      flex: 1,
      height: "100%", // Set the height to the full screen height
    },
    liked:{
      color:themeStyles.primaryColor
    }
  });




// import React from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Share from 'react-native-share';


//   const SharePost = async ({ post ={} }) => {
//     try {
//       const shareOptions = {
//         title: 'Share Post',
//         message: 'Check out this amazing post!',
//         url: 'https://res.cloudinary.com/duhxbekmo/image/upload/v1699507624/rjwvpoddavtaztupelxz.jpg', // Replace with the actual URL of your post
//       };

//       const result = await Share.open(shareOptions);

//       if (result.action === Share.sharedAction) {
//         console.log('Post shared successfully');
//       } else if (result.action === Share.dismissedAction) {
//         console.log('Sharing dismissed');
//       }
//     } catch (error) {
//       console.error('Error sharing post:', error.message);
//     }
  

//   return (
//     <View style={styles.mainContainer}>
//       <TouchableOpacity onPress={SharePost}>
//         <Icon color={'white'} name={'share'} size={20} />
//       </TouchableOpacity>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 0,
//   },
//   // ... your existing styles ...
// });

// export default SharePost;
