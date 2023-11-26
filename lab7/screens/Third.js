import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example06 = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0
  const animVal = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0


  const mLeft = animVal.interpolate({
    inputRange: [0, 0.25, 0.5, 1],
    outputRange: [0, -70, 70, 0]
  });

  const spring = () => {
    console.log("spring..");
    Animated.parallel([
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      tension: 10,
      // bounciness: 30,
      // speed: 20,
      useNativeDriver: true,
    }),
    Animated.timing(animVal, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true

    })
]).start(() => {
      springVal.setValue(0.3);
      animVal.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, marginTop: 120, transform: [{ scale: springVal }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <Animated.Text style={{color:"orange", fontSize: 20, fontWeight: 700,margin:10, transform:[{translateX: mLeft}]}}>Welcome to Falculty of IT!! </Animated.Text>

      <View style={styles.forbutton}>
      <Button title="Spring" onPress={spring} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  forbutton:{
    width : 400,
    marginTop : 200,
    height: 90
    

  }
});

export default Example06;