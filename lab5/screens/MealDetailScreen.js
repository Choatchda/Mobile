import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>{route.params.title}</Text>
      <Text>{route.params.step}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.navigate("Categories")
        }}
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

export default MealDetailScreen;
