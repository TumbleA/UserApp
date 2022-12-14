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

const AddPaymentScreen = ({ navigation }) => {
  const [cardNum, setCardNum] = useState("");
  const [validationDate, setValidtaionDate] = useState("");
  const [birth, setBirth] = useState("");
  const [cardPw, setCardPw] = useState("");
  const { user } = useContext(UserContext);
  const { spinner } = useContext(ProgressContext);

  const onPressRegisterButton = () => {
    spinner.start();
    axios
      .post("http://3.34.19.237:3000/api/payment/add", {
        "email": user?.email,
        "cardNum": cardNum,
        "validationDate": validationDate,
        "birth": birth,
        "cardPw": cardPw
      })
      .then((res) => {
        spinner.stop();
        Alert.alert("카드 등록 완료",
        "카드가 정상적으로 등록 되었습니다.");
       () => navigation.navigate("Payment");
      })
      .catch((err) => {
        spinner.stop();
        Alert.alert("카드 등록 실패!",
        "유효하지 않은 카드입니다.");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={page.Container}>
        <View style={page.Input}>
          <Input
            label="카드번호"
            placeholder=" 1111 2222 3333 4444"
            onChangeText={(text) => setCardNum(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={19}
          />
          <Input
            label="유효기간"
            placeholder=" MM/YY"
            onChangeText={(text) => setValidtaionDate(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={5}
          />
          <Input
            label="생년월일"
            placeholder=" YYMMDD"
            onChangeText={(text) => setBirth(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={6}
          />
          <Input
            label="비밀번호"
            placeholder=" password"
            onChangeText={(text) => setCardPw(text)}
            onSubmitEditing={() => {}}
            returnKeyType="done"
            isPassword
          />
        </View>

        <View style={page.Button}>
          <Button title="등록하기" onPress={onPressRegisterButton}></Button>
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
    marginTop: 110,
    width: "80%",
  },
});

export default AddPaymentScreen;
