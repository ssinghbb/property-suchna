import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from 'react-i18next';

export default function Home({ navigation }) {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles?.login}>
      <Text style={{ color: 'white' }}></Text>

      <View style={styles.container}>
        <View style={styles?.imgDiv}>
          <Image source={require("../../../assets/logo.png")} />
        </View>
        <View style={{ flex: 4 }}>
          <View style={styles?.btnDiv}>
            {/* <Button title="Login" /> */}
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
