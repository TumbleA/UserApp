import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Button from "./../../components/Button";
import axios from "axios";
import { theme } from "./../../theme";
import { UserContext } from "../../contexts";

const Scan = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({data}) => {
    setScanned(true);
    axios
      .post("http://3.34.19.237:3000/api/rental", {
        // email: user?.email,
        email: "js1234@naver.com",
        tumblerId: parseInt(data),
      })
      .then((res) => {
        Alert.alert("대여 완료", "1번 텀블러 대여 완료");
        navigation.navigate("TumblA");
      })
      .catch((err) => {
         Alert.alert("대여 실패", "대여할 수 없는 텀블러입니다.");
      });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: "80%", width: "90%" }}
        barCodeTypes="qr"
      />
      {scanned && (
        <View style={styles.button}>
          <Button
            title={"다시 스캔하기"}
            onPress={() => setScanned(false)}
            isUnfilled
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  button: {
    width: "80%",
  },
});

export default Scan;
