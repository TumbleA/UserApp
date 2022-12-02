import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Cafe from "./../../components/Cafe";
import Button from "./../../components/Button";
import { theme } from "./../../theme";
import { Text } from "@react-native-material/core";

const cafes = [
  { id: 1, name: "중도 카페", openingHours: "9:00~18:00", tumblers: "4개" },
  { id: 2, name: "학생회관 카페", openingHours: "9:00~18:00", tumblers: "4개" },
  { id: 3, name: "다산 카페", openingHours: "9:00~18:00", tumblers: "4개" },
  { id: 4, name: "다산 카페", openingHours: "9:00~18:00", tumblers: "4개" },
];

const Home = ({ navigation }) => {
  return (
    <View style={page.Container}>
      <View style={page.TitleBox} >
        <Text variant="h6" style={page.Title}>카페 리스트</Text>
      </View>
      <ScrollView style={page.List}>
        {cafes.map((cafe) => (
          <Cafe
            key={cafe.id}
            name={cafe.name}
            tumblers={cafe.tumblers}
            onPress={() => navigation.navigate("CafeInfo")}
          ></Cafe>
        ))}
      </ScrollView>
      <View style={page.Button}>
        <Button title="대여하기" onPress={() => navigation.navigate("Scan")} />
      </View>
    </View>
  );
};

const page = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background,
  },
  TitleBox : {
    width:'100%',
    marginTop:10,
    paddingLeft:15,
    paddingBottom:5,
    borderRadius : 3,
    borderColor :theme.grey,
    borderBottomWidth :1.5,
  },
  Title :{
    color:theme.black
  },
  List: {
    width: "100%",
    flex: 0.5,
  },
  Button: {
    width: "70%",
    flex: 0.2,
  },
});
export default Home;
