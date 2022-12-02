import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../theme";
import { Text } from "@react-native-material/core";
import { ProgressContext } from "../../contexts/Progress";
import { UserContext } from "../../contexts/User";

const LoginScreen = ({ navigation }) => {
  const { dispatch } = useContext(UserContext);
  const { spinner } = useContext(ProgressContext);

  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  useEffect(() => {
    let emailMsg = "";
    let passwordMsg = "";

    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (email && !emailRegex.test(email)) {
      emailMsg = "이메일 형식이 유효하지 않아요.";
    }
    setEmailMsg(emailMsg);
    if (password && password.length < 8) {
      passwordMsg = "비밀번호를 8자리 이상 입력해주세요.";
    }
    setPasswordMsg(passwordMsg);
  }, [email, password]);

  useEffect(() => {
    setDisabled(!(email && password && !emailMsg && !passwordMsg));
  }, [email, password, emailMsg, passwordMsg]);

  const onPressLoginButton = () => {
    // spinner.start
    // axios.post("http://3.34.19.237:3000/user/signin",{
    //   "email": email,
    //   "password":password,
    // }).then((response)=>{
    //   //유저 확인
    //   console.log(response);
        // spinner.stop
    //   navigation.navigate("Register");
    // }).catch((err)=>{
    //   if(err)
    //   Alert.alert('로그인에 실패하였습니다.',err.message)
    // })
    dispatch({email});

  };
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
          <View style={page.Text}>
            <Text variant="caption" color={theme.red}>
              {emailMsg}
            </Text>
          </View>
          <Input
            label="비밀번호"
            value={password}
            placeholder=" password"
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => {}}
            returnKeyType="done"
            isPassword
          />
          <View style={page.Text}>
            <Text variant="caption" color={theme.red}>
              {passwordMsg}
            </Text>
          </View>
        </View>

        <View style={page.Button}>
          <Button
            title="로그인"
            onPress={onPressLoginButton}
            disabled={disabled}
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
    marginTop: 100,
  },
  Text: {
    alignItems: "flex-start",
    color: theme.red,
    width: "90%",
    marginTop: 3,
  },
  Button: {
    marginTop: 30,
    width: "80%",
  },
});
export default LoginScreen;
