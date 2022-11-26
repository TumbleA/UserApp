import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../theme";

const AddPaymentScreen = ({ navigation }) => (
  <View style={page.Container}>
    <View style={page.Input}>
      <Input label="카드번호" placeholder=" 1111 2222 3333 4444" />
      <Input label="유효기간" placeholder=" MM/YY" />
      <Input label="생년월일" placeholder=" YYMMDD" />
      <Input label="비밀번호" placeholder=" password" />
    </View>

    <View style={page.Button}>
      <Button
        title="등록하기"
        onPress={() => navigation.navigate("Payment")}
      ></Button>
    </View>
  </View>
);

const page = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.background,
  },
  Input: {
    flex: 5,
    width: "90%",
    marginTop: 10,
  },
  Button: {
    flex: 1,
    width: "80%",
  },
});

export default AddPaymentScreen;
