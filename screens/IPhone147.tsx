import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone147 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text, styles.textTypo2]}>Сумма</Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>{`5000 ₽ `}</Text>
      </View>
      <View style={[styles.rectangleParent, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.text3Position]} />
        <Image
          style={[styles.arrowForwardIos1Icon, styles.text2Position]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
        <Text style={[styles.text2, styles.text2Position]}>Организация</Text>
      </View>
      <View style={[styles.signInButtonParent, styles.signLayout]}>
        <Pressable
          style={[styles.signInButton, styles.text5Position]}
          onPress={() => navigation.navigate("IPhone1415")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/sign-in-button.png")}
          />
        </Pressable>
        <Text style={[styles.text3, styles.text3Position]}>Позиции</Text>
      </View>
      <View style={[styles.signInButton1, styles.signLayout]}>
        <Image
          style={[styles.buttonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text4, styles.textTypo2]}>
          Добавить в избранное
        </Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={styles.starPurple5001Icon}
          contentFit="cover"
          source={require("../assets/star-purple500-1.png")}
        />
      </View>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Pressable
          style={styles.arrowBackIos1}
          onPress={() => navigation.navigate("IPhone145")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back-ios-1.png")}
          />
        </Pressable>
        <Text style={[styles.text5, styles.text5Position]}>
          Добавление в избранное
        </Text>
      </View>
      <View style={[styles.lineParent, styles.buttonIconLayout]}>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.text6, styles.textTypo2]}>
          Введите название...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 340,
    left: 25,
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  frameLayout: {
    height: 1,
    width: 341,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
  },
  frameItemLayout: {
    width: 350,
    height: 35,
  },
  text3Position: {
    top: 0,
    position: "absolute",
  },
  text2Position: {
    top: 9,
    position: "absolute",
  },
  signLayout: {
    width: 354,
    position: "absolute",
  },
  text5Position: {
    top: 50,
    position: "absolute",
  },
  buttonIconLayout: {
    height: 40,
    position: "absolute",
  },
  viewPosition: {
    height: 85,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  text: {
    top: -2,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 55,
  },
  text1: {
    top: 23,
    left: 2,
    fontSize: FontSize.size_xl,
    color: Color.black,
    position: "absolute",
  },
  parent: {
    top: 381,
    height: 60,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    height: 35,
    width: 350,
    left: 0,
  },
  arrowForwardIos1Icon: {
    left: 322,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  text2: {
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
  },
  rectangleParent: {
    top: 180,
    left: 21,
    height: 35,
    position: "absolute",
  },
  signInButton: {
    width: 356,
    height: 35,
    left: 0,
  },
  text3: {
    left: 8,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
  },
  signInButtonParent: {
    top: 246,
    height: 90,
    left: 19,
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
  },
  text4: {
    top: 10,
    left: 100,
    fontWeight: "700",
    color: Color.white,
    display: "flex",
    alignItems: "center",
    width: 159,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
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
  starPurple5001Icon: {
    top: 11,
    left: 315,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  signInButton1: {
    top: 472,
    left: 17,
    height: 39,
  },
  view1: {
    backgroundColor: Color.white,
  },
  icon1: {
    overflow: "hidden",
  },
  arrowBackIos1: {
    top: 52,
    width: 24,
    height: 24,
    left: 19,
    position: "absolute",
  },
  text5: {
    left: 70,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  frameInner: {
    top: 35,
  },
  text6: {
    top: 14,
    left: 5,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  lineParent: {
    top: 109,
    width: 340,
    left: 25,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone147;
