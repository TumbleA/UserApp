import React from "react";
import { View, StyleSheet, Image } from "react-native";
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
        {/* <Ionicons name="cafe" size={50} color="blue" /> */}
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
    height: 90,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.grey,
    paddingBottom: 10,
    borderRadius: 10,
  },
  Icon: {
    flex: 1.3,
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
