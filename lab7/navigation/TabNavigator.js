import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Example01 from "../screens/Firstpage";


const Tab = createBottomTabNavigator()

export default function Tabforanimation() {
    <NavigationContainer>
          <Tab.Navigator
        initialRouteName="Meals"
        screenOptions={{
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#F5F5F5" },
          tabBarLabelStyle: { fontSize: 15 },
        }}
      >
        <Tab.Screen
          name="MealsTab"
          component={Example01}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons name="ios-restaurant-outline" size={24} color="red" />
              );
            },
            headerShown: false,
            title: "Meals",
          }}
        />
        {/* <Tab.Screen
          name="FavoritesTab"
          component={""}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="ios-star-outline" size={24} color="orange" />
              );
            },
            headerShown: false,
            title: "Favorites",
          }}
        /> */}
    </Tab.Navigator>
    </NavigationContainer>
}