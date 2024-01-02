import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import './src/locales/index'
import { Provider } from 'react-redux';
import store from "./redux/store";
import { Alert, LogBox } from "react-native";
import Routes from "./src/routes/Routes";
import AuthNavigation from "./AuthNavigation";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import * as Linking from 'expo-linking';

// import * as Sentry from 'sentry-expo';

//ignored warnings
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


export default function App(props) {
  // console.log("props:", props)
  // const navigation = useNavigation();


  // Sentry.init({
  //   dsn: "https://3b3fcd115b80c1179e7600b4f87c2816@o4506460481257472.ingest.sentry.io/4506461541629952",
  //   enableInExpoDevelopment: true,
  //   debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  // });
  // Sentry.nativecrush()
  // throw new Error("Headers;")


  // useEffect(() => {
  //   const handleDeepLink = async () => {
  //     const url = await Linking.getInitialURL();
  //     Alert.alert(url, "start");
  //     if (url) {
  //       Alert.alert(url, "first if");

  //       // Parse the URL and navigate accordingly
  //       if (url.includes('https://abc.property.com/test')) {
  //         Alert.alert(url, "second if");

  //         // Navigate to the TestComponent screen
  //         navigation.navigate('test');
  //       }
  //       else {
  //         Alert.alert(url, "else");

  //         navigation.navigate('profile');

  //       }
  //     }
  //   };

  //   handleDeepLink();

  //   // Add event listener for deep linking
  //   Linking.addEventListener('url', handleDeepLink);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     Linking.removeEventListener('url', handleDeepLink);
  //   };
  // }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthNavigation />
          {/* <Routes/> */}
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}


// export default Sentry.wrap(App);
