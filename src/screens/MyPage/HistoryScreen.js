import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "./../../theme";

const HistoryScreen = () => {
  return (
    <View style={styles.Container}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});

export default HistoryScreen;
