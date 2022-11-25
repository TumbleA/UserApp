import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { theme } from './../theme';

export default function Input({label}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Lable}>{label}</Text>
        <TextInput style={styles.StyledTextInput}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    Container : {
        margin : 10,
        width : '100%',
    },
    Lable : {
        // fontSize : 14,
        // fontWeight : 20,
        // marginBottom : 6,
        color : theme.black
    },
    StyledTextInput : {
        backgroundColor: theme.grey,
        fontSize: 16,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.black
    }
})