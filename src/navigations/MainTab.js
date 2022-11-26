import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPageStack from "./MainPageStack";
import ListStack from "./ListStack";
import MyPageStack from "./MyPageStack";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "./../theme";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: theme.active,
        inactiveTintColor: theme.inActive,
        tabBarHideOnKeyboard:true,
      }}
      tabBarOptions={{ showLabel: false }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cup" size={24} color={color} />
          ),
        }}
        name="MainPageStack"
        component={MainPageStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={24} color={color} />
          ),
        }}
        name="ListStack"
        component={ListStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="MyPageStack"
        component={MyPageStack}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
