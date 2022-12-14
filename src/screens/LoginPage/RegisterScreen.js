import React, { useRef, useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../theme";
import { Text } from "@react-native-material/core";
import { ProgressContext } from "../../contexts/Progress";
import axios from 'axios';


const RegisterScreen = ({ navigation }) => {
  const { spinner } = useContext(ProgressContext);
  const [disabled, setDisabled] = useState(true);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [userNameMsg, setUserNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  useEffect(() => {
    let userNameMsg = "";
    let emailMsg = "";
    let passwordMsg = "";
    let passwordConfirmMsg = "";

    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (userName && userName.length < 2)
      userNameMsg = "이름은 두 자리 이상 입력해주세요.";
    setUserNameMsg(userNameMsg);

    if (email && !emailRegex.test(email))
      emailMsg = "이메일 형식이 유효하지 않아요.";
    setEmailMsg(emailMsg);

    if (password && password.length < 8)
      passwordMsg = "비밀번호를 8자리 이상 입력해주세요.";
    setPasswordMsg(passwordMsg);

    if (passwordConfirm && (password !== passwordConfirm)) {
      passwordConfirmMsg = "비밀번호가 일치하지 않아요.";
    }
    setPasswordConfirmMsg(passwordConfirmMsg);
  }, [userName, email, password, passwordConfirm]);

  useEffect(() => {
    setDisabled(
      !(
        userName &&
        email &&
        password &&
        passwordConfirm &&
        !userNameMsg &&
        !emailMsg &&
        !passwordMsg &&
        !passwordConfirmMsg
      )
    );
  }, [
    userName,
    email,
    password,
    passwordConfirm,
    userNameMsg,
    emailMsg,
    passwordMsg,
    passwordConfirmMsg,
  ]);

  const onPressRegisterButton = () => {
    spinner.start();
    axios.post("http://3.34.19.237:3000/api/user/signup",{
      "email": email,
      "password":password,
      "username":userName
    }).then((res)=>{
      spinner.stop();
      Alert.alert('계정 생성 완료!','이제 로그인 하실 수 있습니다.')
      navigation.navigate("Login");
    }).catch((err)=>{
      spinner.stop();
      if(err)
      Alert.alert('회원가입 실패!','중복된 이메일입니다.')
    })
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={page.Container}>
        <View style={page.Input}>
          <Input
            label="이름"
            placeholder="김아주"
            onChangeText={(text) => setUserName(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={12}
          />
          <View style={page.Text}>
            <Text variant="caption" color={theme.red}>
              {userNameMsg}
            </Text>
          </View>
          <Input
            label="이메일"
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
            placeholder=" password"
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            isPassword
          />
          <View style={page.Text}>
            <Text variant="caption" color={theme.red}>
              {passwordMsg}
            </Text>
          </View>
          <Input
            label="비밀번호 확인"
            placeholder=" password"
            onChangeText={(text) => setPasswordConfirm(text)}
            onSubmitEditing={() => {}}
            returnKeyType="done"
            isPassword
          />
          <View style={page.Text}>
            <Text variant="caption" color={theme.red}>
              {passwordConfirmMsg}
            </Text>
          </View>
        </View>

        <View style={page.Button}>
          <Button
            title="가입하기"
            onPress={onPressRegisterButton}
            disabled={disabled}
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
  Text: {
    alignItems: "flex-start",
    color: theme.red,
    width: "90%",
    marginTop: 3,
  },
  Button: {
    marginTop: 40,
    width: "80%",
  },
});

export default RegisterScreen;
