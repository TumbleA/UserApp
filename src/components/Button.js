import React from "react";
import { theme } from "./../theme";
import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

const Button = ({ title, onPress, isUnfilled }) => {
  return (
    <>
      <Pressable
        style={isUnfilled ? styles.Container : styles.Container_isFilled}
        onPress={onPress}
      >
        <Text style={isUnfilled ? styles.Title : styles.Title_isFilled}>
          {title}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  Container_isFilled: {
    backgroundColor: theme.buttonBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  Title_isFilled: {
    fontSize: 15,
    padding: 13,
    color: theme.buttonTitle,
  },
  Container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  Title: {
    fontSize: 16,
    padding: 8,
    color: theme.blue,
  },
});

export default Button;
