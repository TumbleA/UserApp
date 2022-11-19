import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import Scan from "../screens/Scan";
import CafeInfo from './../screens/CafeInfo';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign :'center'
    }}>
      <Stack.Screen name="TumblA" component={Home} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="CafeInfo" component={CafeInfo} />
    </Stack.Navigator>
  );
};

export default MainStack;
