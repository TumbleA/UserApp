import { ListItem } from "@react-native-material/core";
import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { View } from "react-native";


const HistoryListItem = ({ cafeName, rentalDate, returnDate }) => {
  <View style={styles.ListItem}>
    <ListItem
      title={cafeName}
      secondaryText={`${rentalDate} ~ ${returnDate}`}
    />
  </View>;
};

const styles = StyleSheet.create({
  ListItem: {
    marginTop: 20,
    borderRadius: 10,
    borderColor: theme.black,
  },
});
export default HistoryListItem;
