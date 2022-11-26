import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Scan from "../screens/MainPage/Scan";
import CafeInfo from "./../screens/CafeInfo";
import Home from "./../screens/MainPage/HomeScreen";

const Stack = createStackNavigator();

const MainPageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="TumblA" component={Home} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="CafeInfo" component={CafeInfo} />
    </Stack.Navigator>
  );
};

export default MainPageStack;
