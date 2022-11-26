import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "@react-native-material/core";
import { EvilIcons } from "@expo/vector-icons";
import { theme } from "./../theme";

const ProfileList = ({ name, onPress }) => {
  return (
    <>
      <ListItem
        title={name}
        onPress={onPress}
        trailing={(props) => (
          <EvilIcons
            style={styles.Icon}
            name="chevron-right"
            size={24}
            color="black"
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.grey,
    paddingBottom: 10,
    margin: 10,
  },
  Text: {
    fontSize: 15,
    flex: 6,
  },
  Icon: {
    flex: 0.8,
  },
});

export default ProfileList;
