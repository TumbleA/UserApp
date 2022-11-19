import React from "react";
import { View, Text, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Button
        title="결제 수단"
        onPress={() => navigation.navigate("Payment")}
      ></Button>
      <Button
        title="신고 접수"
        onPress={() => navigation.navigate("Report")}
      ></Button>
      <Button
        title="대여 기록"
        onPress={() => navigation.navigate("History")}
      ></Button>
      <Button
        title="로그 아웃"
        onPress={() => navigation.navigate("Logout")}
      ></Button>
    </View>
  );
};

export default Profile;
