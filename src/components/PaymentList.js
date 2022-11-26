import React from "react";
import { ListItem } from "@react-native-material/core";
import { StyleSheet } from "react-native";
import { theme } from "./../theme";
import { View } from "react-native";

const PaymentList = ({ name, cardNum }) => (
  <View style={styles.ListItem}>
    <ListItem title={name} secondaryText={cardNum} />
  </View>
);

const styles = StyleSheet.create({
  ListItem: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.black,
  },
});
export default PaymentList;
