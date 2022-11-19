import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";


const Cafe = ({name, openingHours, tumblers, onPress}) => {
  return (
    <Pressable style={styles.Container} onPress={onPress}>
      <View style={styles.Icon} >
        <Ionicons name="cafe" size={30} color="black" />
      </View>
      <View style={styles.Contents}>
        <Text style={{fontSize:17}}>{name}</Text>
        <Text>영업 시간: {openingHours}</Text>
        <Text>텀블러 : {tumblers}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection:'row',
    backgroundColor: theme.white,
    margin:20
  },
  Icon:{
    flex:1,
    justifyContent:'center'
  },
  Contents: {
    flex:3,
    color: theme.black
  },
});

export default Cafe;
