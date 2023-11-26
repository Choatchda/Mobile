// import React from "react";
// // import library ที่จำเป็น

// // import screen ที่เกี่ยวข้อง

// // สร้าง navigator ตามโจทย์กำหนด

// // สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// // function MyXXNavigator() {
// //   return (
// //     // กำหนดรายละเอียดของ navigator
// //   );
// // }

// // อาจกำหนด Navigator เพิ่มได้
// // function MyYYNavigator() {
// //   return (
// //     // กำหนดรายละเอียดของ navigator
// //   );
// // }

// // สร้าง Navigator หลัก
// export default function MyNavigator() {
//   return (
//     <NavigationContainer>
//       {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
//     </NavigationContainer>
//   );
// }



import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";


// import คอมโพเนนต์ที่จำเป็น
  import CategoriesScreen  from "../screens/CategoriesScreen";
  import CategoryMealsScreen from "../screens/CategoryMealsScreen"
  import MealDetailScreen from "../screens/MealDetailScreen"
  import FavoritesScreen from "../screens/FavoritesScreen";
  import FiltersScreen from "../screens/FiltersScreen"

const MealsNavigator = createNativeStackNavigator();
const MealsFavTabNavigator = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


 function MealsNavigator2() {
  
   return(
    <MealsNavigator.Navigator initialRouteName="Categories" component={CategoriesScreen}
        screenOptions={{headerStyle:{backgroundColor: "#4a148c"}, headerTintColor: "white" }}
    >
    <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
      options={{
        title:"Meal Categories"
      }}
    />
    <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen}/>
    <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}/>
  </MealsNavigator.Navigator>);

  

  
}

function FavNavigator() {

  return(
   <MealsNavigator.Navigator>
    <MealsNavigator.Screen name="Favorite" component={FavoritesScreen}
    
    options={{
      headerShown : false
    }}/>
    <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}/>
   </MealsNavigator.Navigator>);

}

function MealsFavTabNavigator2() {
      return (
        <MealsFavTabNavigator.Navigator>
          <MealsFavTabNavigator.Screen name= "Meals" component={MealsNavigator2} 
          options={{
            headerShown : false,
            tabBarIcon:  ({ color, size }) => {  return <Ionicons name="ios-restaurant" size={24} color="black" />}
          }} />
          <MealsFavTabNavigator.Screen name= "Favorites" component={FavNavigator} 
          options={{
            headerShown : false,
            tabBarIcon:  ({ color, size }) => {  return <Ionicons name="ios-star" size={24} color="black" />}
          }}
          />
          </MealsFavTabNavigator.Navigator>
      );
}

// function FiltersNavigator(){
//   <NavigationContainer>
//   <MealsNavigator.Screen name="FiltersScreen" component={FiltersScreen}/>
//   </NavigationContainer>

// }

function MainNavigator(){
  return(
      <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="MealsFav" component={MealsFavTabNavigator2}/>
        <Drawer.Screen name="Filters" component={FiltersScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>);
}

export default function MyNavigator() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return(
    MainNavigator()
 
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
