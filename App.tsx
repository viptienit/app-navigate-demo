import Login from "./components/Login/Login";
import Home from "./components/Home";
import "@/global.css";
import * as SplashScreen from "expo-splash-screen";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { OPENSANS, ROBOTO, YELLOWTAIL } from "./utils/globalStyles";

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    [YELLOWTAIL]: require("./assets/fonts/Yellowtail-Regular.ttf"),
    [ROBOTO]: require("./assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    [OPENSANS]: require("./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
