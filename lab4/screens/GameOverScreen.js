import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/colors";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds : {props.round}</Text>
      <Text>Correct Number was : {props.answer}</Text>
      
      <Button
              title="NewGame"
              color={Colors.primary}
              onPress = {props.onRestart}
              // ...เพิ่ม property onPress...
            />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
