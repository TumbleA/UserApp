import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Cafe from "./../../components/Cafe";
import Button from "./../../components/Button";
import { theme } from "./../../theme";
import { Text } from "@react-native-material/core";
import { UserContext } from "../../contexts";
import img from "../../../assets/cafe1.png"
import img2 from "../../../assets/cafe2.png"
import img3 from "../../../assets/cafe3.png"
import img4 from "../../../assets/cafe4.png"


const cafes = [
  { id: 1, name: "도서관 카페", openingHours: "8:00~21:00", tumblerCount: "2개", image: img },
  { id: 2, name: "학생회관 카페", openingHours: "9:00~18:00", tumblerCount: "1개" , image: img2},
  { id: 3, name: "다산관 카페", openingHours: "9:00~18:00", tumblerCount: "1개" , image: img3},
  { id: 4, name: "할리스 아주대 병원", openingHours: "7:00~21:00", tumblerCount: "1개", image: img4},
];

const Home = ({ navigation }) => {
  const { user } = useContext(UserContext);
  return (
    <View style={page.Container}>
      <View style={page.TitleBox} >
        <Text variant="h6" style={page.Title}>{`${user.email}`}</Text>
      </View>
      <ScrollView style={page.List}>
        {cafes.map((cafe) => (
          <Cafe
            key={cafe.id}
            name={cafe.name}
            openingHours ={cafe.openingHours}
            tumblerCount={cafe.tumblerCount}
            img ={cafe.image}
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
