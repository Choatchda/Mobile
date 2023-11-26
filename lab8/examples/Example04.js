import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View,} from "react-native";

const Example04 = () => {
  

  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });

    },
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      if (touches.length >= 2) {
        Animated.spring(scale, {
          toValue: 3,
          friction: 3,
          useNativeDriver: false,
        }).start();
      }
      if(touches.length ==  1){
        pan.setValue({
          x: gestureState.dx,
          y:gestureState.dy
        })
      }
    },

    onPanResponderRelease: () => {
      pan.flattenOffset()
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },

   


  });

  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        // style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        style={ [pan.getLayout(), styles.img, {transform: [{ scale: scale }]}] }
        source={require("../assets/IT_Logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 4,
  },
  img: {
    width : 180,
    height : 150
  }
});

export default Example04;
