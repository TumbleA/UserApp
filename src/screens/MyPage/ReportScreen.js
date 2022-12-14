import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import axios from "axios";
import { theme } from "../../theme";
import { ProgressContext } from "../../contexts/Progress";
import { UserContext } from "../../contexts";

const ReportScreen = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(UserContext);
  const { spinner } = useContext(ProgressContext);

  const onPressRegisterButton = () => {
    axios
      .post("http://3.34.19.237:3000/api/payment/add", {
        "email":user?.email,
        "title": title,
        "img": img,
        "content": content
      })
      .then((res) => {
        spinner.stop();
      })
      .catch((err) => {
        spinner.stop();
        Alert.alert("등록 실패",
        "다시 등록 해주세요.");
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={page.Container}>
        <View style={page.Input}>
          <Input
            label="제목"
            onChangeText={(text) => setTitle(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
          />
          <Input
            label="사진"
            onChangeText={(text) => setImg(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
          />

          <Input
            style={page.isMultiline}
            isMultiline
            label="내용"
            onChangeText={(text) => setContent(text)}
            onSubmitEditing={() => {}}
            returnKeyType="done"
          />
        </View>

        <View style={page.Button}>
          <Button
            title="등록하기"
            onPress={() => navigation.navigate("Payment")}
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
  isMultiline: {
    padding: 30,
  },
  Button: {
    marginTop: 150,
    width: "80%",
  },
});
export default ReportScreen;
