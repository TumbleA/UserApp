import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Pressable } from "@react-native-material/core";
import { theme } from "../theme";
import ProfileList from "../components/ProfileList";

const menuList = [
  { id: 1, name: "결제수단", page: "Payment" },
  { id: 2, name: "신고접수", page: "Report" },
  { id: 3, name: "대여기록", page: "History" },
  { id: 4, name: "로그아웃", page: "Logout" },
];

const MyPage = ({ navigation }) => {
  return (
    <View style={page.Container}>

      <View style={page.TextContainer}>
        <Text style={{ fontSize: 35, fontWeight: "300" }}>김아주</Text>
        <Text style={{ marginLeft: 4 }} variant="body1">
          201820743
        </Text>
      </View>

      <View style={page.ListContainer}>
        {menuList.map((menu) => (
          <ProfileList
            name={menu.name}
            onPress={() => navigation.navigate(`${menu.page}`)}
          />
        ))}
      </View>
    </View>
  );
};

const page = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background,
  },
  TextContainer: {
    marginTop: 70,
    marginRight:20,
    width: "80%",
    flex: 1,
  },
  ListContainer: {
    marginTop: 10,
    marginRight:5,
    marginBottom: 100,
    width: "90%",
    flex: 2,
  },
  List: {
    flexDirection: "row",
  },
});

export default MyPage;