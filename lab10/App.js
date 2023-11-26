import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./screen/Example01";
import Example02 from "./screen/Example02"
import Example03 from "./screen/Example03"
import Example04 from "./screen/Example04"
import Add from "./screen/Addstudent"

import Student  from "./navigation/student";

export default function App() {
  return (
   <Student /> ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});