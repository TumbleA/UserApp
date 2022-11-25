import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import { Pressable, Text } from "@react-native-material/core";

const Cafe = ({ name, openingHours, tumblers, onPress }) => {
  return (
    <Pressable
      style={styles.Container}
      onPress={onPress}
      pressEffect="highlight"
    >
      <View style={styles.Icon}>
        {/* <Ionicons name="cafe" size={40} color="black" /> */}
      </View>
      <View style={styles.Contents}>
        <Text variant="body1">{name}</Text>
        <Text variant="caption">영업 시간: {openingHours}</Text>
        <Text variant="caption">텀블러 : {tumblers}</Text>
      </View>
      <View style={styles.footer}>
        <Text variant="caption">영업 중</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    backgroundColor: theme.white,
    marginTop: 13,
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.grey,
    paddingBottom: 10,
    borderRadius: 10,
  },
  Icon: {
    flex: 0.8,
    justifyContent: "center",
  },
  Contents: {
    flex: 3,
    color: theme.black,
    justifyContent: "center",
  },
  footer: {
    marginTop: 9,
    flex: 0.8,
  },
});

export default Cafe;
