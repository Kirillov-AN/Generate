import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import IPhone14191 from "../components/IPhone141";
import IPhone14181 from "../components/IPhone14";
import IPhone1422 from "../components/IPhone144";
import IPhone1423 from "../components/IPhone145";
import IPhone1420 from "../components/IPhone142";
import IPhone14211 from "../components/IPhone143";
import IPhone14Signup11 from "../components/IPhone14Signup";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Iphone14Test = () => {
  return (
    <View style={styles.iphone14Test}>
      <IPhone14191 />
      <IPhone14181 />
      <IPhone1422 />
      <IPhone1423 />
      <IPhone1420 />
      <IPhone14211 />
      <View style={styles.iphone14}>
        <View style={[styles.view, styles.viewLayout]}>
          <View style={[styles.view1, styles.view1ShadowBox]} />
          <Text style={[styles.text, styles.textTypo]}>Ввод данных</Text>
          <Image
            style={[styles.arrowBackIos1Icon, styles.emailEnterFieldPosition]}
            contentFit="cover"
            source={require("../assets/arrow-back-ios-1.png")}
          />
        </View>
        <View style={[styles.emailEnterField, styles.emailEnterFieldPosition]}>
          <View style={[styles.emailEnterFieldChild, styles.view1ShadowBox]} />
          <Text style={[styles.text1, styles.text1Position]}>Категория</Text>
          <Image
            style={[styles.arrowForwardIos1Icon, styles.text1Position]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
        </View>
      </View>
      <IPhone14Signup11 />
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 85,
    top: 0,
    width: 390,
  },
  view1ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  emailEnterFieldPosition: {
    left: 19,
    position: "absolute",
  },
  text1Position: {
    top: 16,
    position: "absolute",
  },
  view1: {
    backgroundColor: Color.white,
    height: 85,
    top: 0,
    width: 390,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text: {
    top: 50,
    left: 128,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  arrowBackIos1Icon: {
    top: 52,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  view: {
    left: 0,
    height: 85,
    top: 0,
    position: "absolute",
  },
  emailEnterFieldChild: {
    top: 6,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_300,
    width: 348,
    height: 38,
  },
  text1: {
    left: 23,
    fontSize: FontSize.size_sm,
    color: Color.dimgray,
    display: "flex",
    alignItems: "center",
    width: 74,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  arrowForwardIos1Icon: {
    left: 317,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  emailEnterField: {
    top: 117,
    width: 372,
    height: 51,
  },
  iphone14: {
    top: 401,
    left: 1877,
    backgroundColor: Color.whitesmoke_200,
    height: 845,
    width: 390,
    position: "absolute",
  },
  iphone14Test: {
    flex: 1,
    width: "100%",
    height: 2961,
  },
});

export default Iphone14Test;
