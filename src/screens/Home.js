import React from "react";
import { StyleSheet, View } from "react-native";
import Cafe from "../components/Cafe";
import Navigation from "../navigations";
import Button from "./../components/Button";
import { theme } from "./../theme";

const cafes = [
  { id: 1, name: "중도 카페" , openingHours:'9:00~18:00' ,tumblers:'4개'},
  { id: 2, name: "학생회관 카페",openingHours:'9:00~18:00',tumblers:'4개' },
  { id: 3, name: "다산 카페",openingHours:'9:00~18:00' ,tumblers:'4개'},
  { id: 4, name: "다산 카페",openingHours:'9:00~18:00' ,tumblers:'4개'},
];

const Home = ({ navigation }) => {
  return (
    <View style={page.Container}>
      <View style={page.List}>
        {cafes.map((cafe) => (
          <Cafe
            key={cafe.id}
            name={cafe.name}
            openingHours={cafe.openingHours}
            tumblers={cafe.tumblers}
            onPress={() => navigation.navigate("CafeInfo")}
          ></Cafe>
        ))}
      </View>
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
  List: {
    width: "80%",
    flex: 6,
  },
  Button: {
    width: "80%",
    flex: 1,
  },
});
export default Home;
