import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import PaymentList from "../../components/PaymentListItem";
import { theme } from "../../theme";

const payments = [
  { id: 1, name: "신한카드", cardNum: "2222 2222 2222 2222" },
  { id: 2, name: "기업카드", cardNum: "1111 1111 1111 1111" },
];

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={page.Container}>
      <View style={page.ListContainer}>
        {payments.map((payment) => (
          <PaymentList
            key={payment.id}
            name={payment.name}
            cardNum={payment.cardNum}
          />
        ))}
      </View>

      <View style={page.ButtonContainer}>
        <Button
          title="추가하기"
          onPress={() => navigation.navigate("AddPayment")}
        />
      </View>
    </View>
  );
};

const page = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  ListContainer: {
    width: "90%",
    flex: 5,
  },
  ButtonContainer: {
    width: "80%",
    flex: 1,
  },
});

export default PaymentScreen;
