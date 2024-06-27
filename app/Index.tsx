import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Navigation } from "./src/navigation/Navigation";

function App() {
  return (
    <NavigationContainer independent={true}>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
