import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  Platform,
  Dimensions,
} from "react-native";
import { data } from "./DATA.js";
import Card, {
  snapToInterval,
  remainSpace,
  cardWidth,
  cardHeight,
} from "./components/card";

const { width } = Dimensions.get("window");

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const DATA = [...data, { image: false }];
  const SCALEVALUE = 0.7;
  const OPACITYVALUE = 0.8;
  const rotateDeg = "150deg";
  return (
    <View style={styles.container}>
     
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={DATA}
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={snapToInterval}
        horizontal
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        renderItem={({ item, index }) => {
          if (!item.image) {
            return (
              <View
                style={{
                  width: remainSpace,
                }}
              />
            );
          }
          let inputRange = [
            (index - 1) * snapToInterval,
            index * snapToInterval,
            (index + 1) * snapToInterval,
          ];

          const scale = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [SCALEVALUE, 1, SCALEVALUE],
          });
          const opacity = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [OPACITYVALUE, 1, OPACITYVALUE],
          });
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.4, 0, width * 0.4],
          });

          const translateXText = scrollX.interpolate({
            inputRange,
            outputRange: [cardWidth, 0, cardWidth],
          });

          const translateYText = scrollX.interpolate({
            inputRange,
            outputRange: [cardHeight, 0, cardHeight],
          });

          const rotate = scrollX.interpolate({
            inputRange,
            outputRange: [rotateDeg, "0deg", rotateDeg],
          });
          return (
            <Card
              image={item.image}
              scale={scale}
              opacity={opacity}
              translateX={translateX}
              text={item.key}
              translateXText={translateXText}
              translateYText={translateYText}
              title={item.title}
              rotate={rotate}
            ></Card>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
