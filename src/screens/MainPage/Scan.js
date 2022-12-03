import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
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

  //텀블러 대여 - 유저 정보(ID, email)와 텀블러 ID
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`대여 완료${user.email} 데이터 ${data}`);
    // axios
    //   .post("http://3.34.19.237:3000/user/signin", {
        // userID: user?.email,
    //     tumblerID: data,
    //   })
    //   .then((res) => {
    //     alert(`대여 완료${type} 데이터 ${data}`);
    //     navigation.navigate('HomeScreen');
    //   })
    //   .catch((err) => {
    //     alert(`대여 완료${type} 데이터 ${data}`);
    //   });
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
