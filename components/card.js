import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export const cardWidth = width * 0.7;
export const cardHeight = height * 0.6;
export const space = 10;
export const remainSpace = width - cardWidth - space * 2;
export const snapToInterval = cardWidth + space * 2;

const borderRadius = 10;

const Card = (props) => {
  const {
    image,
    scale,
    opacity,
    translateX,
    title,
    translateXText,
    translateYText,
    rotate,
  } = props;

  return (
    <Animated.View style={styles.cardContainer(scale, opacity)}>
      {image && (
        <View style={styles.imageContainer}>
          <Animated.Image
            style={styles.image(translateX)}
            source={{ uri: image }}
          />
          <Animated.Text
            style={styles.text(translateXText, translateYText, rotate)}
          >
            {title}
          </Animated.Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: (scale, opacity) => ({
    height: cardHeight,
    width: cardWidth,
    borderRadius: borderRadius,
    overflow: "hidden",
    marginHorizontal: space,
    transform: [{ scaleY: scale }],
    opacity: opacity,
    alignItems: "center",
  }),
  imageContainer: {
    width: cardWidth,
    height: cardHeight,
    overflow: "hidden",
    alignItems: "center",
    borderRadius,
  },
  image: (translateX) => ({
    width: cardWidth * 1.4,
    height: cardHeight,
    resizeMode: "cover",
    transform: [
      {
        translateX: translateX,
      },
    ],
  }),
  text: (translateXText, translateYText, rotate) => ({
    fontSize: 32,
    fontWeight: "bold",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 20,
    color: "white",
    transform: [
      {
        translateX: translateXText,
      },
      {
        translateY: translateYText,
      },
      {
        rotate: rotate,
      },
    ],
  }),
});
export default Card;
