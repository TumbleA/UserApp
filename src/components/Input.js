import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "./../theme";
import { Text } from '@react-native-material/core';


const Input = ({
  label,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
  placeholder,
  isPassword,
  returnKeyType,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.Container}>
      <Text variant="body2" style={styles.Label}>{label}</Text>
      <TextInput
        style={styles.TextInput}
        value={value}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
  },
  Label: {
    fontSize: 14,
    marginBottom: 6,
  },
  TextInput: {
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 7,
  },
});

export default Input;
