import React from "react";
import "../global.css";
import App from "./App";
import { SafeAreaView, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <App />
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
        hidden={false}
        translucent={false}
        
      />
    </>
  );
}
