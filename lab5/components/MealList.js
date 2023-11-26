import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

const MealList = ({props}) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
      title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      image={itemData.item.imageUrl}
      onSelectMeal={() => {
        navigation.navigate("MealDetail", {title:itemData.item.title, step:itemData.item.steps})
      }}
    />

      
    );
  };

  const catId = props.id;
  console.log(catId)

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>


    
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
