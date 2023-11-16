// import { View, Text, Image, StyleSheet, Button } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useTranslation } from 'react-i18next';

// export default function Home({ navigation }) {
//   const { t } = useTranslation();
//  const[selectedLanguage, setSectectedLanguage]= usestate("en")

//   return (
//     <SafeAreaView style={styles?.login}>
//       <Text style={{ color: 'white' }}></Text>

//       <View style={styles.container}>
//         <View style={styles?.imgDiv}>
//           <Image source={require("../../../assets/logo.png")} />
//         </View>
//         <View style={{ flex: 4 }}>
//           <View style={styles?.btnDiv}>
//             {/* <Button title="Login" /> */}
//             <Button
//               title={t('home.login')}
//               onPress={() => navigation.navigate("login")}
//             />
//           </View>
//           <View style={styles?.btnDiv}>
//             <Button
//               title={t('home.signUp')}
//               onPress={() => navigation.navigate("register")}
//             />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   login: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     flexDirection: "column",
//   },
//   imgDiv: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 8,
//   },
//   btnDiv: {
//     paddingLeft: 30,
//     paddingRight: 30,
//     marginTop: 10,
//   },
// });




import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';  // Update this line

export default function Home({ navigation }) {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <SafeAreaView style={styles?.login}>
      <Text style={{ color: 'white' }}></Text>

      <View style={styles.container}>
        <View style={styles?.imgDiv}>
          <Image source={require("../../../assets/logo.png")} />
        </View>
        <View style={{ flex: 4 }}>
          <View style={styles?.btnDiv}>
            <Button
              title={t('home.login')}
              onPress={() => navigation.navigate("login")}
            />
          </View>
          <View style={styles?.btnDiv}>
            <Button
              title={t('home.signUp')}
              onPress={() => navigation.navigate("register")}
            />
          </View>
          {/* <View style={styles?.btnDiv}>
            <Text >{t('home.selectLanguage')}</Text>
            <Picker
              selectedValue={selectedLanguage}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue) => changeLanguage(itemValue)}
              color={"white"}
            >
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Hindi" value="hi" />
            </Picker>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imgDiv: {
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
  },
  btnDiv: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
  },
});
