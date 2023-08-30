import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone1415 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo2]}>Стоимость</Text>
        <View style={[styles.frameChild, styles.frameChildBorder]} />
        <Text style={[styles.text1, styles.textTypo1]}>{`5000 ₽ `}</Text>
      </View>
      <View style={[styles.signInButtonWrapper, styles.signLayout]}>
        <Pressable
          style={[styles.signInButton, styles.signLayout]}
          onPress={() => navigation.navigate("IPhone148")}
        >
          <Image
            style={styles.buttonIcon}
            contentFit="cover"
            source={require("../assets/button1.png")}
          />
          <Text style={[styles.text2, styles.textTypo2]}>Добавить</Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </Pressable>
      </View>
      <View style={styles.group}>
        <Text style={[styles.text3, styles.text3Position]}>Количество</Text>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-141.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-151.png")}
        />
        <View style={[styles.lineView, styles.frameChildBorder]} />
        <Text style={[styles.text4, styles.textTypo1]}>1</Text>
      </View>
      <Text style={[styles.text5, styles.textTypo]}>Сумма</Text>
      <Text style={[styles.text6, styles.textTypo]}>5000 ₽</Text>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text7, styles.textTypo1]}>Добавление позиции</Text>
        <Pressable
          style={styles.arrowBackIos1}
          onPress={() => navigation.navigate("IPhone145")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back-ios-1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.arrowBackIos1}
          onPress={() => navigation.navigate("IPhone145")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrow-back-ios-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.lineParent, styles.text3Position]}>
        <View style={[styles.frameChild1, styles.frameChildBorder]} />
        <Text style={[styles.text8, styles.textTypo1]}>Замена масла</Text>
      </View>
      <Text style={[styles.text9, styles.textTypo2]}>Название</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  frameChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo1: {
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  signLayout: {
    height: 39,
    width: 354,
    position: "absolute",
  },
  text3Position: {
    left: 25,
    position: "absolute",
  },
  frameLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    top: 403,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
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
    overflow: "hidden",
    width: "100%",
  },
  text: {
    top: -2,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 55,
    width: 341,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
    left: 0,
  },
  text1: {
    top: 23,
    left: 2,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  parent: {
    top: 200,
    left: 30,
    height: 60,
    width: 340,
    position: "absolute",
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
    height: 40,
    position: "absolute",
  },
  text2: {
    top: 10,
    left: 143,
    fontWeight: "700",
    color: Color.whitesmoke_100,
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
  signInButton: {
    top: 0,
    left: 0,
  },
  signInButtonWrapper: {
    top: 459,
    left: 16,
  },
  text3: {
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
    fontWeight: "500",
  },
  frameItem: {
    top: 32,
    left: 99,
  },
  frameInner: {
    top: 33,
    left: 0,
  },
  lineView: {
    top: 64,
    left: 49,
    width: 37,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
  },
  text4: {
    top: 34,
    left: 60,
  },
  group: {
    top: 287,
    left: 133,
    width: 134,
    height: 68,
    position: "absolute",
  },
  text5: {
    left: 31,
  },
  text6: {
    left: 127,
  },
  view1: {
    backgroundColor: Color.white,
  },
  text7: {
    top: 50,
    left: 89,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  icon: {
    display: "none",
  },
  arrowBackIos1: {
    left: 19,
    top: 52,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frameChild1: {
    top: 35,
    width: 341,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#7a7a7a",
    borderStyle: "solid",
    left: 0,
  },
  text8: {
    top: 8,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
    left: 0,
  },
  lineParent: {
    top: 133,
    height: 40,
    width: 340,
  },
  text9: {
    top: 122,
    left: 26,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415;
