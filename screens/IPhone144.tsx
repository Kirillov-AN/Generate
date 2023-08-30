import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone144 = () => {
  return (
    <View style={styles.iphone14}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={styles.text}>Сумма</Text>
        <Text style={styles.text1}>500 ₽</Text>
        <Text style={styles.text2}>Кофейня Залупкина</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={styles.text}>Сумма</Text>
        <Text style={styles.text1}>700 ₽</Text>
        <Text style={styles.text2}>Мойка Пупкина</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={styles.text}>Сумма</Text>
        <Text style={styles.text1}>700 ₽</Text>
        <Text style={styles.text2}>Мойка Пупкина</Text>
      </View>
      <View style={[styles.frameView, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.arrowForwardIos1Icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={styles.text}>Сумма</Text>
        <Text style={styles.text1}>1700 ₽</Text>
        <Text style={styles.text2}>Пятерочка</Text>
      </View>
      <Text style={[styles.text12, styles.textTypo]}>16 мая 2023</Text>
      <Text style={[styles.text13, styles.textTypo]}>14 мая 2023</Text>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text14, styles.textTypo]}>История</Text>
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 75,
    width: 347,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  viewPosition: {
    height: 85,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 75,
    width: 347,
    position: "absolute",
  },
  arrowForwardIos1Icon: {
    top: 10,
    left: 323,
    width: 18,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    color: Color.gray_200,
    width: 49,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    left: 16,
    top: 44,
    position: "absolute",
  },
  text1: {
    left: 74,
    width: 45,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    top: 44,
    position: "absolute",
  },
  text2: {
    top: 12,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    top: 157,
    left: 21,
  },
  rectangleGroup: {
    top: 248,
    left: 21,
  },
  frameView: {
    top: 395,
    left: 20,
  },
  text12: {
    top: 117,
    left: 21,
  },
  text13: {
    top: 355,
    left: 21,
  },
  view1: {
    backgroundColor: Color.white,
  },
  text14: {
    top: 52,
    left: 153,
  },
  icon: {
    top: 762,
    height: 83,
    width: 390,
    left: 0,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 1006,
  },
});

export default IPhone144;
