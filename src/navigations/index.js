import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import Spinner from "../components/Spinner";
import MainStack from "./MainStack";
import { ProgressContext, UserContext } from "../contexts";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user.email ? <MainStack /> : <AuthStack />}
      {inProgress && <Spinner />}
      {/* {<MainStack/>}  */}
    </NavigationContainer>
  );
};

export default Navigation;
