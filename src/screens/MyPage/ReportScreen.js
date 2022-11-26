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

const ReportScreen = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
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
    // flex: 5,
    width: "90%",
    marginTop: 10,
  },
  isMultiline: {
    padding: 30,
  },
  Button: {
    // flex: 1,
    marginTop: 150,
    width: "80%",
  },
});
export default ReportScreen;
