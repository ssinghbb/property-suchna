import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View,
  Button,
} from "react-native";
import globalStyles, { themeStyles } from "../../styles";
import Layout from "./Layout";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomeButton from "../components/common/CoustomButton";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../../redux/slices/userSlice";
const Profile = () => {


  const user = useSelector((state) => state.user.user);
  console.log("user in profile:", user?.user)
  let currentUser = user?.user
  const dispatch = useDispatch();

  // const handleLogin = () => {
  //   // Dispatch the setUser action to update the user state
  //   dispatch(setUser({ name: 'Santosh' }));
  // };
  const handleLogout = () => {
    console.log("logout")
    dispatch(setUser());

  }

  return (
    <Layout>

      <View style={globalStyles.flex1}>
        {/* <Pressable onPress={() => navigate("post")} style={styles.header}>
          <FontAwesome
            name="long-arrow-left"
            color={themeStyles.secondaryColor}
            size={30}
          /> */}
        <View style={styles?.header}>

          <Text style={[globalStyles.secondaryColor, { fontWeight: '800', fontSize: 22 }]}>Profile</Text>
          <Button title="logout" onPress={handleLogout} />

        </View>
        {/* </Pressable> */}
        <View style={styles.user}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
              }}
              style={styles.avatar}
            />
            <View style={styles.editContainer}>
              <Text style={styles.editTitle}>Edit Image</Text>
              <Icon name="pencil" color="gray" size={15} />
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Name :</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={"gray"}
                value={currentUser?.fullName}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor={"gray"}
                value={currentUser?.phoneNumber}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Bio :</Text>
              <TextInput
                style={styles.input}
                placeholder="Bio"
                placeholderTextColor={"gray"}
              />
            </View>
            {/* <View style={styles.fieldContainer}>
              <Text style={styles.label}>Language :</Text>
              <TextInput
                style={styles.input}
                placeholder="Language"
                placeholderTextColor={"gray"}
              />
            </View> */}

          </View>
        </View>
      </View>
      {/* <View>
        <Text style={{ color: 'white' }}>{user ? `Welcome, ${user.name}` : 'Please log in'}</Text>
        <Button title="Login" onPress={handleLogin} />
      </View> */}
      <View style={styles.buttonContainer}>
        <CustomeButton title={'Update'} />
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10
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
    flexDirection: 'column'
  },
  profileContainer: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    gap: 30,
    alignItems: "center",
    padding: 10,
    borderBottomColor: themeStyles.secondaryColor,
    borderBottomWidth: 1,
    fontWeight: '700',
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