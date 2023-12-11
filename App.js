import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import './src/locales/index'
import { Provider } from 'react-redux';
import store from "./redux/store";
import { LogBox } from "react-native";
import Routes from "./src/routes/Routes";
import AuthNavigation from "./AuthNavigation";

//ignored warnings
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


export default function App() {
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


