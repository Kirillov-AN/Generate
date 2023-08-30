import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone1471 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14, styles.iconLayout]}>
      <Pressable
        style={[styles.signInButton, styles.signInButtonPosition]}
        onPress={() => navigation.navigate("IPhone14151")}
      >
        <Image
          style={[styles.buttonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>Добавить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <Pressable
          style={styles.arrowForwardIos1}
          onPress={() => navigation.navigate("IPhone1451")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
        </Pressable>
        <Text style={[styles.text1, styles.textTypo]}>Категория</Text>
      </View>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text2, styles.textTypo1]}>
          Добавление организации
        </Text>
        <Pressable
          style={[styles.arrowBackIos1, styles.signInButtonPosition]}
          onPress={() => navigation.navigate("IPhone1481")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back-ios-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.lineParent, styles.buttonIconLayout]}>
        <View style={[styles.frameItem, styles.framePosition]} />
        <Text style={[styles.text3, styles.textTypo]}>Введите название...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  signInButtonPosition: {
    left: 19,
    position: "absolute",
  },
  buttonIconLayout: {
    height: 40,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  viewPosition: {
    height: 85,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
  },
  text: {
    top: 10,
    left: 143,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  groupIcon: {
    height: "41.03%",
    width: "4.52%",
    top: "28.21%",
    right: "6.5%",
    bottom: "30.77%",
    left: "88.98%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signInButton: {
    top: 260,
    width: 354,
    height: 39,
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    top: 0,
    left: 0,
    height: 35,
    width: 350,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowForwardIos1: {
    left: 322,
    width: 18,
    height: 18,
    top: 9,
    position: "absolute",
  },
  text1: {
    left: 18,
    top: 9,
  },
  rectangleParent: {
    top: 199,
    left: 21,
    height: 35,
    width: 350,
    position: "absolute",
  },
  view1: {
    backgroundColor: Color.white,
  },
  text2: {
    top: 50,
    left: 67,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
  },
  arrowBackIos1: {
    top: 52,
    width: 24,
    height: 24,
  },
  frameItem: {
    top: 35,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  text3: {
    top: 14,
    left: 5,
  },
  lineParent: {
    top: 133,
    left: 25,
    width: 340,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    overflow: "hidden",
  },
});

export default IPhone1471;
