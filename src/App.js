import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import Navigation from "./navigations";
import { theme } from "./theme";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Navigation/>
    </ThemeProvider>
  );
};


export default App;
