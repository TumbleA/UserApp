import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Payment from "../screens/Payment";
import Report from "../screens/Report";
import History from "../screens/History";
import Profile from './../screens/Profile';

const Stack = createStackNavigator();

const MypageStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign :'center'
    }}>
      <Stack.Screen name="Profile" component={ Profile }/>
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export default MypageStack;
