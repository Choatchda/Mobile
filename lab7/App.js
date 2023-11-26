import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import Example02 from "./screens/Firstpage";
import Example05  from "./screens/Seconds";
import Example06  from "./screens/Third";

const Tab = createBottomTabNavigator()

export default function App() {
  return  (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="First" component={Example02} options={{headerShown: false}}/>
      <Tab.Screen name="Second" component={Example05} options={{headerShown: false}}/>
      <Tab.Screen name="Third" component={Example06} options={{headerShown: false}}/>

    </Tab.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
