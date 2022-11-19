import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./MainStack";
import ListStack from "./ListStack";
import MypageStack from "./MypageStack";
import { Feather, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "./../theme";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: theme.active,
        inactiveTintColor: theme.inActive,
      }}
      tabBarOptions={{ showLabel: false }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cup" size={24} color={color} />
          ),
        }}
        name="MainStack"
        component={MainStack}
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
        name="MypageStack"
        component={MypageStack}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
