import React from "react";
import Button from "../components/Button";
import { StyleSheet } from 'react-native';
import { theme } from './../theme';

const items = [
  { id: 1, name: "중도 카페" },
  { id: 2, name: "학생회관 카페" },
  { id: 3, name: "다산관 카페" },
];

const List = ({ navigation }) => {
  return (
      items.map((item) => (
      <Button
        key={item.id}
        title={item.name}
        onPress={() => navigation.navigate("CafeInfo")}
      ></Button>
      ))
  )
};

const page = StyleSheet.create({
  Container: {
    backgroundColor: theme.background,
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});

export default List;
