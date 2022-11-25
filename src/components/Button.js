import React from "react";
import { theme } from "./../theme";
import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <>
      <Pressable style={styles.Container} onPress={onPress}>
        <Text style={styles.Title}>{title}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.buttonBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  Title: {
    fontSize: 15,
    padding: 13,
    color: theme.buttonTitle,
  },
});

export default Button;
