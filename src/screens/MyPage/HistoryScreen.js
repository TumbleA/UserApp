import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { theme } from "./../../theme";
import HistoryListItem from "./../../components/HistoryListItem";

const historyList = [
  {
    id: 1,
    cafeName: "중도 카페",
    rentalDate: "11/26 13:00:00",
    returnDate: "11/26 17:30:05",
  },
  {
    id: 2,
    cafeName: "중도 카페",
    rentalDate: "11/26 13:00:00",
    returnDate: "11/26 17:30:05",
  },
];

const HistoryScreen = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const data = await axios({
        method: "GET",
        url: "http://3.34.19.237:3000/api/payment/add",
      });
      setList(res.data);
    };
    getHistory();
  }, []);
  return (
    <ScrollView style={styles.Container}>
      {historyList.map((history) => (
        <HistoryListItem
          key={history.id}
          cafeName={history.cafeName}
          rentalDate={history.rentalDate}
          returnDate={history.returnDate}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});

export default HistoryScreen;
