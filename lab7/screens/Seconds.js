import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Image, RootTagContext } from "react-native";

const Example05 = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  const spinAnim = useRef(new Animated.Value(0)).current


  const spin = spinAnim.interpolate({
    inputRange: [0, 0.5,1],
    outputRange: ["0deg", "360deg", "0deg"],
  });



  const fadeIn = () => {
    console.log("fade-in");
    Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
    Animated.timing(spinAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
    })

   ]).start( () =>{
        fadeAnim.setValue(1)
        spinAnim.setValue(0)
   });
  };




  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.fadingContainer, { opacity: fadeAnim }, {transform: [{ rotate: spin }]}]}
      source={require("../assets/IT_Logo.png")}
      />
     
      <Button title="Fade In" onPress={fadeIn} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
      },
      fadingContainer: {
        width: 300,
        height: 250,
        marginTop: 150
     
      },
      fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10,
      },
});

export default Example05;
