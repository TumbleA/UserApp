import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Cafe from './../../components/Cafe';
import Button from './../../components/Button';
import { theme } from './../../theme';

const cafes = [
  { id: 1, name: "중도 카페" , openingHours:'9:00~18:00' ,tumblers:'4개'},
  { id: 2, name: "학생회관 카페",openingHours:'9:00~18:00',tumblers:'4개' },
  { id: 3, name: "다산 카페",openingHours:'9:00~18:00' ,tumblers:'4개'},
  { id: 4, name: "다산 카페",openingHours:'9:00~18:00' ,tumblers:'4개'},
  { id: 5, name: "다산 카페",openingHours:'9:00~18:00' ,tumblers:'4개'},
];

const Home = ({ navigation }) => {
  return (
    <View style={page.Container}>
      
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
  List: {
    marginTop:30,
    width: "90%",
    flex : 1,
    
  },
  Button: {
    width: "70%",
    flex: 0.15,
  },
});
export default Home;
