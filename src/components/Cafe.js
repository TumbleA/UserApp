import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import { Pressable, Text } from "@react-native-material/core";

const Cafe = ({ name, openingHours, tumblerCount, onPress, img }) => {
  return (
    <Pressable
      style={styles.Container}
      onPress={onPress}
      pressEffect="highlight"
    >
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} resizeMode={'cover'}/>
      </View>
      <View style={styles.Contents}>
        <Text variant="body1" style={{fontWeight:'600',fontSize:17}} >{name}</Text>
        <Text variant="caption" style={{paddingTop:3}}>영업 시간: {openingHours}</Text>
        <Text variant="caption">텀블러 : {tumblerCount}</Text>
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
    height: 100,
    marginLeft: 20,
    marginRight:5,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: theme.grey,
    borderRadius: 10,
    backgroundColor: theme.white,
  },
  imageContainer:{
    borderColor: theme.blue,
    borderWidth: 1,
    width : 70,
    height :70,
    borderRadius: 25,
    marginRight: 8,
    overflow:"hidden",
  },
  image: {
    width: 70,
    height :70,
    borderRadius: 40,
  },
  Contents: {
    flex: 3,
    marginLeft: 10,
    color: theme.black,

  },
  footer: {
    flex: 0.8,
  },
});

export default Cafe;
