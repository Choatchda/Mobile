// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MealsFavTabNavigator from "./MealsFavTabNavigator";
import FilterNavigator from "./FilterNavigator";
import CategoriesScreen from "../screens/CategoriesScreen";

const Drawer = createDrawerNavigator();

export default function MyNavigator() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c" },
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen name="Meals" component={CategoriesScreen} 
          options={{
            headerTitle: "Categories",
          }}
        />
        <Drawer.Screen name="Filters" component={FilterNavigator} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
