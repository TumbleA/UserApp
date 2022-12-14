import React from "react";
import { ListItem } from "@react-native-material/core";
import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { View } from "react-native";

const HistoryListItem = ({ tumblerNum, rentalDate, returnDate }) => (
  <View style={styles.ListItem}>
    <ListItem 
      title={`텀블러 ID :${tumblerNum}`}
      secondaryText={`${rentalDate} ~ ${returnDate}`}
    />
  </View>
);

const styles = StyleSheet.create({
  ListItem: {
    marginTop: 20,
    borderRadius: 10,
    borderColor: theme.black,
  },
});
export default HistoryListItem;
