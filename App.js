import React from "react";
import RootStackNav from "./navigation/RootStackNav";
import CountContextProvider from "./contextAPI/countContextProvider";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <CountContextProvider>
        <RootStackNav />
      </CountContextProvider>
    </NavigationContainer>
  );
}
