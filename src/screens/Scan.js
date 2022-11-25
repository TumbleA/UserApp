import { View, Text } from 'react-native'
import React from 'react'
import QRCodeScanner from './../components/QRcodeScanner';

export default function Scan() {
  return (
    <View>
      <QRCodeScanner/>
    </View>
  )
}