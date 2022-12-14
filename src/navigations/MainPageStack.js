import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Scan from "../screens/MainPage/Scan";
import Home from "./../screens/MainPage/HomeScreen";
import { theme } from "./../theme";

const Stack = createStackNavigator();

const MainPageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="TumblA" component={Home} />
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{
          headerTitleAlign: "left",
          headerTintColor: theme.white,
          headerTitleStyle: { fontWeight: "bold" },
          headerStyle: {
            backgroundColor: theme.black,
          },
          headerTitle: "QR코드 스캔",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainPageStack;
