import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
      }}
    >
      <Stack.Screen name="main" component={MainTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
