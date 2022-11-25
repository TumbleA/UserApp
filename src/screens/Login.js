import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./../components/Button";
import Input from "../components/Input";
import { theme } from "./../theme";

Button;
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.Container}>
      <Text>Login Screen</Text>
      <Input label="email"></Input>
      <Button
        style={styles.Button}
        title="Register"
        onPress={() => navigation.navigate("Register")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: theme.background,
  },
  Button: {
    width: "80%",
  },
});
export default Login;
