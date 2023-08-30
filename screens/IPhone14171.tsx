import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone14171 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.iphone14Child, styles.rectangleLayout]} />
      <Text style={[styles.email, styles.textTypo]}>Email</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Image
          style={[styles.hide1Icon, styles.text1Position]}
          contentFit="cover"
          source={require("../assets/hide-1.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>Пароль</Text>
      </View>
      <Pressable
        style={[styles.signInButton, styles.textPosition]}
        onPress={() => navigation.navigate("IPhone14161")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text1, styles.text1Position]}>Продолжить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.frameChild} />
        <Text style={[styles.text2, styles.textPosition]}>
          Подтверждение пароля
        </Text>
        <Image
          style={[styles.hide1Icon, styles.text1Position]}
          contentFit="cover"
          source={require("../assets/hide-1.png")}
        />
      </View>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text3, styles.text3Position]}>Регистрация</Text>
        <Image
          style={[styles.arrowBackIos1Icon, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/arrow-back-ios-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 38,
    left: 21,
    width: 348,
    position: "absolute",
  },
  textTypo: {
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  text1Position: {
    top: 11,
    position: "absolute",
  },
  textPosition: {
    left: 15,
    position: "absolute",
  },
  viewPosition: {
    height: 85,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text3Position: {
    top: 52,
    position: "absolute",
  },
  iphone14Child: {
    top: 139,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    height: 38,
    left: 21,
  },
  email: {
    top: 149,
    left: 37,
    width: 35,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    top: 0,
    height: 38,
    width: 348,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  hide1Icon: {
    left: 317,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    top: 10,
    width: 69,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 195,
    left: 21,
    height: 38,
  },
  buttonIcon: {
    top: -1,
    left: 6,
    borderRadius: Border.br_11xl,
    height: 40,
    width: 348,
    position: "absolute",
  },
  text1: {
    left: 133,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    top: 11,
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
    top: 307,
    width: 354,
    height: 39,
  },
  text2: {
    top: 9,
    width: 188,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    top: 251,
    left: 21,
    height: 38,
  },
  view1: {
    backgroundColor: Color.white,
  },
  text3: {
    left: 132,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  arrowBackIos1Icon: {
    left: 19,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone14171;
