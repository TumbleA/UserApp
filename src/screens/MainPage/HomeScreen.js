import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Cafe from "./../../components/Cafe";
import Button from "./../../components/Button";
import { theme } from "./../../theme";
import { Text } from "@react-native-material/core";
import { UserContext } from "../../contexts";
import img from "../../../assets/cafe1.png"


const cafes = [
  { id: 1, name: "도서관 카페", openingHours: "9:00~18:00", tumblerCount: "4개", image: img },
  { id: 2, name: "학생회관 카페", openingHours: "9:00~18:00", tumblerCount: "4개" , image: img},
  { id: 3, name: "다산관 카페", openingHours: "9:00~18:00", tumblerCount: "4개" , image: img},
  { id: 4, name: "할리스 아주대 병원", openingHours: "9:00~18:00", tumblerCount: "4개", image: img},
];

const Home = ({ navigation }) => {
  const { user } = useContext(UserContext);
  return (
    <View style={page.Container}>
      <View style={page.TitleBox} >
        <Text variant="h6" style={page.Title}>{`${user.email} 님 대여 가능`}</Text>
      </View>
      <ScrollView style={page.List}>
        {cafes.map((cafe) => (
          <Cafe
            key={cafe.id}
            name={cafe.name}
            openingHours ={cafe.openingHours}
            tumblerCount={cafe.tumblerCount}
            img ={cafe.image}
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
