import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import { ProgressProvider, UserProvider } from "./contexts";
import Navigation from "./navigations";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ProgressProvider>
          <Navigation />
        </ProgressProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
