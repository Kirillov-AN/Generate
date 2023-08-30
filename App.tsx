const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14Signup from "./screens/IPhone14Signup";
import IPhone14 from "./screens/IPhone14";
import IPhone141 from "./screens/IPhone141";
import IPhone142 from "./screens/IPhone142";
import ZyroImage1 from "./components/ZyroImage1";
import IPhone143 from "./screens/IPhone143";
import Frame from "./components/Frame";
import Frame1 from "./screens/Frame1";
import IPhone144 from "./screens/IPhone144";
import IPhone145 from "./screens/IPhone145";
import IPhone146 from "./screens/IPhone146";
import IPhone147 from "./screens/IPhone147";
import IPhone148 from "./screens/IPhone148";
import IPhone149 from "./screens/IPhone149";
import IPhone1410 from "./screens/IPhone1410";
import IPhone1411 from "./screens/IPhone1411";
import IPhone1412 from "./screens/IPhone1412";
import IPhone1413 from "./screens/IPhone1413";
import IPhone1414 from "./screens/IPhone1414";
import IPhone1415 from "./screens/IPhone1415";
import IPhone1416 from "./screens/IPhone1416";
import IPhone1417 from "./screens/IPhone1417";
import Frame2 from "./screens/Frame";
import IPhone1418 from "./screens/IPhone1418";
import IPhone1419 from "./screens/IPhone1419";
import IPhone1421 from "./screens/IPhone1421";
import IPhone1431 from "./screens/IPhone1431";
import IPhone1441 from "./screens/IPhone1441";
import IPhone14Signup1 from "./screens/IPhone14Signup1";
import IPhone1451 from "./screens/IPhone1451";
import IPhone1461 from "./screens/IPhone1461";
import IPhone1471 from "./screens/IPhone1471";
import IPhone1481 from "./screens/IPhone1481";
import IPhone1491 from "./screens/IPhone1491";
import IPhone14101 from "./screens/IPhone14101";
import IPhone14111 from "./screens/IPhone14111";
import IPhone14121 from "./screens/IPhone14121";
import IPhone14131 from "./screens/IPhone14131";
import IPhone14141 from "./screens/IPhone14141";
import IPhone14151 from "./screens/IPhone14151";
import IPhone14161 from "./screens/IPhone14161";
import IPhone14171 from "./screens/IPhone14171";
import IPhone14Signup11 from "./components/IPhone14Signup";
import IPhone14181 from "./components/IPhone14";
import IPhone14191 from "./components/IPhone141";
import IPhone1420 from "./components/IPhone142";
import IPhone14211 from "./components/IPhone143";
import IPhone1422 from "./components/IPhone144";
import IPhone1423 from "./components/IPhone145";
import Iphone14Test from "./screens/Iphone14Test";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "ChivoMono-Light": require("./assets/fonts/ChivoMono-Light.ttf"),
    "ChivoMono-Regular": require("./assets/fonts/ChivoMono-Regular.ttf"),
    "ChivoMono-Medium": require("./assets/fonts/ChivoMono-Medium.ttf"),
    "ChivoMono-Bold": require("./assets/fonts/ChivoMono-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14Signup"
              component={IPhone14Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14"
              component={IPhone14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone141"
              component={IPhone141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone142"
              component={IPhone142}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone143"
              component={IPhone143}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone144"
              component={IPhone144}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone145"
              component={IPhone145}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone146"
              component={IPhone146}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone147"
              component={IPhone147}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone148"
              component={IPhone148}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone149"
              component={IPhone149}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1410"
              component={IPhone1410}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1411"
              component={IPhone1411}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1412"
              component={IPhone1412}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1413"
              component={IPhone1413}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1414"
              component={IPhone1414}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415"
              component={IPhone1415}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1416"
              component={IPhone1416}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1417"
              component={IPhone1417}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1418"
              component={IPhone1418}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1419"
              component={IPhone1419}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1421"
              component={IPhone1421}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1431"
              component={IPhone1431}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1441"
              component={IPhone1441}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Signup1"
              component={IPhone14Signup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1451"
              component={IPhone1451}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1461"
              component={IPhone1461}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1471"
              component={IPhone1471}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1481"
              component={IPhone1481}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1491"
              component={IPhone1491}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14101"
              component={IPhone14101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14111"
              component={IPhone14111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14121"
              component={IPhone14121}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14131"
              component={IPhone14131}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14141"
              component={IPhone14141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14151"
              component={IPhone14151}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14161"
              component={IPhone14161}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14171"
              component={IPhone14171}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Signup11"
              component={IPhone14Signup11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14181"
              component={IPhone14181}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14191"
              component={IPhone14191}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1420"
              component={IPhone1420}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14211"
              component={IPhone14211}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1422"
              component={IPhone1422}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1423"
              component={IPhone1423}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Iphone14Test"
              component={Iphone14Test}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
