import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack';
import Spinner from "../components/Spinner";
import MainStack from './MainStack';


const Navigation = () => {
  return (
    <NavigationContainer>
        {/* <AuthStack/> */}
        {/* <Spinner/> */}
        <MainStack/>
    </NavigationContainer>
  );
};

export default Navigation;

