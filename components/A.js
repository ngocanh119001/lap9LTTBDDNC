import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
    
      <Animated.Image
       source = {require('./7f98275813e28a551d30e7addb2c3189.gif')}
        style={{ resizeMode:'contain', width:'50%',
          transform: [{ translateX: pan.x }, { translateY: pan.y }], 
        }}
        {...panResponder.panHandlers}
      >
      
      </Animated.Image>
      <View style={{flex:4}}>
         <Animated.Image
       source = {require('./7f98275813e28a551d30e7addb2c3189.gif')}
        style={{ resizeMode:'contain', width:'50%',
          transform: [{ translateX: pan.x }, { translateY: pan.y }], 
        }}
        {...panResponder.panHandlers}
      >
      
      </Animated.Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

});

export default App;