import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';

import Addstudent  from "../screen/Addstudent";
import ViewStudent from "../screen/ViewAll"
import Update from "../screen/UpdateStudent";


const Stack = createNativeStackNavigator();

function Student () {

    return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Add Student">
    <Stack.Screen name="Add Student" component={Addstudent} />
    <Stack.Screen name="Student List" component={ViewStudent} />
    <Stack.Screen name="Student Info" component={Update} />
    </Stack.Navigator>
    </NavigationContainer>


    );
   

}

export default Student;