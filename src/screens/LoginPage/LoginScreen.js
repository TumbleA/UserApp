import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../theme";

const LoginScreen = ({ navigation }) => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setDisabled(!(email && password && !errorMsg));
  }, [email, password, errorMsg]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={page.Container}>
        <View style={page.Input}>
          <Input
            label="이메일"
            value={email}
            placeholder=" abc123@ajou.ac.kr"
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
          />
          <Input
            label="비밀번호"
            value={password}
            placeholder=" password"
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => {}}
            returnKeyType="done"
            isPassword
          />
        </View>

        <View style={page.Button}>
          <Button
            title="로그인"
            onPress={() => navigation.navigate("Register")}
          ></Button>
          <Button
            title="계정 생성"
            onPress={() => navigation.navigate("Register")}
            isUnfilled
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
    marginTop: 50,
    width: "80%",
  },
});
export default LoginScreen;
