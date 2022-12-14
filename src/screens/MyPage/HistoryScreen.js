import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { theme } from "./../../theme";
import axios from "axios";
import { UserContext } from "../../contexts";
import HistoryListItem from "./../../components/HistoryListItem";
import moment from 'moment';

const HistoryScreen = () => {
  const [historyList, setHistoryList] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    axios
      .post("http://3.34.19.237:3000/api/rentalhistory", {
        email: user?.email,
        // email: "js1234@naver.com",
      })
      .then((res) => {
        setHistoryList(res.data);
        // alert("A")
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
      <View style={styles.Container}>
        {historyList.map((i) => (
          <HistoryListItem
            key={i.id}
            tumblerNum={i.tumblerNum}
            rentalDate={moment(i.rentalDate).format("YYYY-MM-DD HH:mm:ss")}
            returnDate={moment(i.dueDate).format("YYYY-MM-DD HH:mm:ss")}
          />
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});

export default HistoryScreen;
