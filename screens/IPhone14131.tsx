import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone14131 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14, styles.iconLayout]}>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone1418")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text, styles.textTypo3]}>Добавить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={styles.wrapper}>
        <Text
          style={[styles.text1, styles.textFlexBox]}
        >{`Итог  5000 ₽ `}</Text>
      </View>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <Pressable
          style={[styles.arrowForwardIos1, styles.arrowLayout]}
          onPress={() => navigation.navigate("IPhone1481")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
        </Pressable>
        <Text style={styles.text2}>Организация</Text>
      </View>
      <View style={styles.parent}>
        <Text style={styles.text3}>Позиции</Text>
        <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
          <View style={[styles.frameItem, styles.frameItemLayout]} />
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Text style={[styles.text4, styles.textPosition]}>Название</Text>
          <Text style={[styles.text5, styles.textTypo1]}>Количество</Text>
          <Text style={[styles.text6, styles.textTypo]}>Сумма</Text>
          <Text style={[styles.text7, styles.textFlexBox]}>Замена масла</Text>
          <Text style={[styles.text8, styles.textTypo]}>5000 ₽</Text>
          <Text style={[styles.text9, styles.textTypo1]}>1</Text>
        </View>
      </View>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text10, styles.textTypo2]}>Новый расход</Text>
        <Pressable
          style={styles.arrowBackIos1}
          onPress={() => navigation.navigate("IPhone1441")}
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
  textTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
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
  arrowLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  frameItemLayout: {
    height: 94,
    width: 347,
    position: "absolute",
  },
  textPosition: {
    left: 11,
    color: Color.gray_200,
  },
  textTypo1: {
    top: 36,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    top: 62,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  viewPosition: {
    height: 85,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    fontWeight: "500",
    color: Color.black,
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    width: 348,
    height: 40,
    position: "absolute",
  },
  text: {
    left: 143,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    fontSize: FontSize.size_sm,
    top: 10,
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
    top: 452,
    left: 14,
    height: 39,
    width: 354,
    position: "absolute",
  },
  text1: {
    top: 5,
    width: 222,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    left: 0,
    alignItems: "center",
    display: "flex",
  },
  wrapper: {
    top: 380,
    left: 26,
    width: 340,
    height: 41,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.white,
    height: 35,
    width: 350,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowForwardIos1: {
    left: 322,
    top: 9,
    height: 18,
    width: 18,
  },
  text2: {
    color: Color.gray_200,
    left: 18,
    top: 9,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rectangleParent: {
    top: 130,
    left: 20,
  },
  text3: {
    left: 8,
    top: 0,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  frameItem: {
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  arrowForwardIos1Icon: {
    left: 323,
    height: 18,
    width: 18,
    top: 10,
    overflow: "hidden",
  },
  text4: {
    width: 64,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
    fontSize: FontSize.size_sm,
    top: 10,
  },
  text5: {
    width: 78,
    left: 11,
    color: Color.gray_200,
  },
  text6: {
    width: 49,
    left: 11,
    color: Color.gray_200,
  },
  text7: {
    left: 84,
    width: 106,
    color: Color.black,
    fontSize: FontSize.size_sm,
    top: 10,
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
    top: 210,
    height: 139,
    left: 18,
    width: 354,
    position: "absolute",
  },
  view1: {
    backgroundColor: Color.white,
  },
  text10: {
    top: 50,
    left: 124,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
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

export default IPhone14131;
