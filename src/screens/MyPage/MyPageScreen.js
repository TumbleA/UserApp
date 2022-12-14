import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@react-native-material/core";
import ProfileList from "../../components/ProfileList";
import { theme } from "../../theme";
import { UserContext } from "../../contexts/User";

const menuList = [
  { id: 1, name: "결제수단", page: "Payment" },
  { id: 2, name: "신고접수", page: "Report" },
  { id: 3, name: "대여기록", page: "History" },
  { id: 4, name: "로그아웃", page: "Logout" },
];

const MyPage = ({ navigation }) => {
  const { dispatch } = useContext(UserContext);
  const { user } = useContext(UserContext);

  return (
    <View style={page.Container}>
      <View style={page.TextContainer}>
        <Text style={{ fontSize: 35, fontWeight: "300" }}>test3</Text>
        <Text style={{ marginLeft: 4 }} variant="body1">
          {user.email}
        </Text>
      </View>

      <View style={page.ListContainer}>
        {menuList.map((menu) => (
          <ProfileList
            key={menu.id}
            name={menu.name}
            onPress={
              menu.page === "Logout"
                ? () => dispatch({})
                : () => navigation.navigate(`${menu.page}`)
            }
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
    marginRight: 20,
    width: "80%",
    flex: 1,
  },
  ListContainer: {
    marginTop: 10,
    marginRight: 5,
    marginBottom: 100,
    width: "90%",
    flex: 2,
  },
});

export default MyPage;
