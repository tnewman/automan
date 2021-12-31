import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import React from "react";

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
