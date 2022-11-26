import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../theme";

const RegisterScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={page.Container}>
        <View style={page.Input}>
          <Input
            label="이름"
            placeholder=" "
            onChangeText={(text) => setUserName(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={12}
          />
          <Input
            label="이메일"
            placeholder=" abc123@ajou.ac.kr"
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
          />
          <Input
            label="비밀번호"
            placeholder=" password"
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            isPassword
          />
          <Input
            label="비밀번호 확인"
            placeholder=" password"
            onChangeText={(text) => setPasswordConfirm(text)}
            onSubmitEditing={() => {}}
            returnKeyType="done"
            isPassword
          />
        </View>

        <View style={page.Button}>
          <Button
            title="가입하기"
            onPress={() => navigation.navigate("Register")}
          ></Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const page = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.background,
  },
  Input: {
    width: "90%",
    marginTop: 10,
  },
  Button: {
    marginTop: 40,
    width: "80%",
  },
});

export default RegisterScreen;
