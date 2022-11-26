import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { theme } from './../theme';

const Spinner = ({
    params,
}) => (
    <View style={styles.Container}>
        <ActivityIndicator size="large" color={theme.blue}/>
    </View>
);

const styles = StyleSheet.create({
    Container : {
        position: 'absolute',
        zIndex: 2,
        opacity:0.3,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        backgroundColor:theme.black,
    },
})

export default Spinner;
