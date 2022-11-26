import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import List from './../screens/List';
import CafeInfo from './../screens/CafeInfo';

const Stack = createStackNavigator();

const ListStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign :'center'
    }}>
      {/* <Stack.Screen name="Main" component={MainTab}/> */}
      <Stack.Screen name="TumblA" component={List} />
      <Stack.Screen name="CafeInfo" component={CafeInfo} />
      
    </Stack.Navigator>
  );
};

export default ListStack;
