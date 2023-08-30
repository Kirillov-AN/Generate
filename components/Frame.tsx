import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Frame = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    backgroundColor: Color.white,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
});

export default Frame;
