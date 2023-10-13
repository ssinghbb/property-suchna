import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes />
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
