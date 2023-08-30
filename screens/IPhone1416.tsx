import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const IPhone1416 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14, styles.iconLayout]}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{`Итог  500 ₽ `}</Text>
      </View>
      <View style={[styles.signInButton, styles.parentLayout]}>
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>
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
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <Text style={[styles.text2, styles.textTypo2]}>Кофейня Залупкина</Text>
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={styles.text3}>Позиции</Text>
        <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
          <View style={[styles.frameItem, styles.frameItemLayout]} />
          <Text style={[styles.text4, styles.textClr]}>Название</Text>
          <Text style={[styles.text5, styles.textTypo1]}>Количество</Text>
          <Text style={[styles.text6, styles.textTypo]}>Сумма</Text>
          <Text style={[styles.text7, styles.textTypo2]}>Кофе</Text>
          <Text style={[styles.text8, styles.textTypo]}>250 ₽</Text>
          <Text style={[styles.text9, styles.textTypo1]}>2</Text>
        </View>
      </View>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={styles.text10}>История</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentLayout: {
    width: 354,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  frameChildLayout: {
    height: 35,
    width: 350,
    position: "absolute",
  },
  framePosition: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    top: 0,
    left: 0,
  },
  frameItemLayout: {
    height: 94,
    width: 347,
    position: "absolute",
  },
  textClr: {
    color: Color.gray_200,
    left: 11,
  },
  textTypo1: {
    top: 36,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textTypo: {
    top: 62,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  viewPosition: {
    height: 85,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 5,
    width: 222,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_5xl,
    left: 0,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    position: "absolute",
  },
  wrapper: {
    top: 331,
    left: 25,
    width: 340,
    height: 41,
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
  text1: {
    left: 100,
    fontWeight: "700",
    color: Color.white,
    width: 159,
    top: 10,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
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
  signInButton: {
    top: 403,
    height: 39,
    left: 18,
  },
  frameChild: {
    backgroundColor: Color.white,
    height: 35,
    width: 350,
    position: "absolute",
  },
  text2: {
    top: 9,
    left: 18,
    color: Color.black,
  },
  rectangleParent: {
    top: 109,
    left: 20,
  },
  text3: {
    left: 8,
    top: 0,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  frameItem: {
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  text4: {
    width: 64,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
    top: 10,
    alignItems: "center",
    display: "flex",
  },
  text5: {
    width: 78,
    color: Color.gray_200,
    left: 11,
  },
  text6: {
    width: 49,
    color: Color.gray_200,
    left: 11,
  },
  text7: {
    left: 84,
    width: 106,
    top: 10,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    color: Color.black,
  },
  text8: {
    left: 69,
    width: 45,
    color: Color.black,
  },
  text9: {
    left: 98,
    width: 8,
    color: Color.black,
  },
  rectangleGroup: {
    top: 45,
    left: 3,
  },
  parent: {
    top: 168,
    height: 139,
    left: 20,
  },
  view1: {
    backgroundColor: Color.white,
  },
  text10: {
    top: 50,
    left: 153,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowBackIos1: {
    left: 19,
    top: 52,
    width: 24,
    height: 24,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    overflow: "hidden",
  },
});

export default IPhone1416;
