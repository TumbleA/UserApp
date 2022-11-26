import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyPage from "../screens/MyPage/MyPageScreen";
import Payment from "../screens/MyPage/Payment";
import AddPayment from "../screens/MyPage/AddPaymentScreen";
import Report from "../screens/MyPage/Report";
import History from "../screens/MyPage/HistoryScreen";

const Stack = createStackNavigator();

const MyPageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="마이페이지" component={MyPage} />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerTitle: "결제수단" }}
      />
      <Stack.Screen
        name="AddPayment"
        component={AddPayment}
        options={{ headerTitle: "카드등록" }}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{ headerTitle: "신고접수" }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerTitle: "대여기록" }}
      />
    </Stack.Navigator>
  );
};

export default MyPageStack;
