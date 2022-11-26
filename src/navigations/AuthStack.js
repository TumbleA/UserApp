import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/LoginPage/Login";
import Register from "../screens/LoginPage/Register";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
