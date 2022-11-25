import React from 'react';
import { StyleSheet } from 'react-native';
import { Pressable,Text } from '@react-native-material/core';
import { EvilIcons } from "@expo/vector-icons";
import { theme } from './../theme';



const ProfileList = ({name,onPress}) => {
    return (
        <Pressable
          style={styles.Container}
          onPress={onPress}
        >
          <Text style={styles.Text}>{name}</Text>
          <EvilIcons style={styles.Icon} name="chevron-right" size={24} color="black" />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    Container: {
      flexDirection: "row",
      borderBottomWidth:0.5,
      borderBottomColor:theme.grey,
      paddingBottom:10,
      margin:10,
    },
    Text: {
        fontSize: 15,
        flex:6,
    },
    Icon : {
        flex:0.8
    }

  });
  

export default ProfileList;