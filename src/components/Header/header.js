import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  Linking,
} from "react-native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts, ZillaSlab_500Medium } from "@expo-google-fonts/dev";
import CoustomButton from "../common/CoustomButton";
import { themeStyles } from "../../../styles";
import { useFormik } from "formik";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    ZillaSlab_500Medium,
  });

  const formik = useFormik({
    initialValues: {
      Location: "",
      Name: "",
      Description: "",
      Queries: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log("values", values);
      const phoneNumber = "+918319453618"; 
      const message = `Location: ${values.Location}\nName: ${values.Name}\nDescription: ${values.Description}\nQueries: ${values.Queries}`;
      const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      console.log("start");
      try {
        const canOpen = await Linking.canOpenURL(whatsappLink);

        if (canOpen) {
          await Linking.openURL(whatsappLink);
          console.log("start1");
        } else {
          console.log("WhatsApp is not installed.");
        }
      } catch (error) {
        console.error("Error opening WhatsApp:", error);
      }
      resetForm();
    },
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoSection}>
        <Text
          style={{
            fontFamily: "ZillaSlab_500Medium",
            fontSize: 30,
            color: "white",
            fontWeight: "200",
          }}
        >
          Property Suchna
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Material
            color={"yellow"}
            name={"emoticon-cool"}
            size={30}
            height={40}
            width={40}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.form}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Location :</Text>
              <TextInput
                style={styles.input}
                placeholder="Location"
                placeholderTextColor={"gray"}
                onChangeText={formik.handleChange("Location")}
                value={formik.values.Location}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Name: </Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={"gray"}
                onChangeText={formik.handleChange("Name")}
                value={formik.values.Name}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Description :</Text>
              <TextInput
                style={styles.input}
                placeholder="Description"
                placeholderTextColor={"gray"}
                onChangeText={formik.handleChange("Description")}
                value={formik.values.Description}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Queries :</Text>
              <TextInput
                style={styles.input}
                placeholder="Queries"
                placeholderTextColor={"gray"}
                onChangeText={formik.handleChange("Queries")}
                value={formik.values.Queries}
              />
            </View>
          </View>
          <View style={styles.btnSection}>
            <CoustomButton title={"Submit"} onPress={formik.handleSubmit} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  logoSection: {
    flex: 1,
  },
  form: {
    marginTop: 60,
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
  textSection: {
    color: "white",
    fontWeight: "600",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Inter_900Black",
  },
  modalView: {
    backgroundColor: "black",
    paddingTop: 20,
    alignItems: "center",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  btnSection: {
    width: "100%",
    padding: 20,
  },
  btnContainer: {
    alignItems: "center",
  },
});
