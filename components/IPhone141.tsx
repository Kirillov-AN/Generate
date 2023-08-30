import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone14191 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.iphone14Child, styles.iphone14ShadowBox]} />
      <Text style={[styles.email, styles.textTypo4]}>Email</Text>
      <View style={[styles.iphone14Item, styles.iphone14ShadowBox]} />
      <Text style={[styles.text, styles.textTypo4]}>Имя</Text>
      <View style={[styles.iphone14Inner, styles.iphone14InnerShadowBox]} />
      <Image
        style={[styles.hide1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/hide-1.png")}
      />
      <View style={[styles.rectangleView, styles.iphone14InnerShadowBox]} />
      <Text style={[styles.text1, styles.textTypo4]}>Пароль</Text>
      <Text style={[styles.text2, styles.textTypo4]}>Подтверждение пароля</Text>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone14181")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button6.png")}
        />
        <Text style={[styles.text3, styles.textTypo5]}>Продолжить</Text>
        <View style={[styles.arrowForward1, styles.arrowLayout]} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <Image
        style={[styles.hide2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/hide-1.png")}
      />
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text4, styles.text4Position]}>Регистрация</Text>
        <Image
          style={[styles.arrowBackIos1Icon, styles.text4Position]}
          contentFit="cover"
          source={require("../assets/arrow-back-ios-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone14ShadowBox: {
    height: 38,
    width: 348,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    left: 21,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  textTypo4: {
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    left: 37,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iphone14InnerShadowBox: {
    left: 22,
    height: 38,
    width: 348,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
    left: 339,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo5: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  arrowLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  viewPosition: {
    height: 85,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text4Position: {
    top: 52,
    position: "absolute",
  },
  iphone14Child: {
    top: 139,
  },
  email: {
    top: 149,
    width: 35,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    left: 37,
  },
  iphone14Item: {
    top: 193,
  },
  text: {
    top: 203,
    width: 35,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    left: 37,
  },
  iphone14Inner: {
    top: 247,
  },
  hide1Icon: {
    top: 258,
  },
  rectangleView: {
    top: 301,
  },
  text1: {
    top: 257,
    width: 69,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    left: 37,
  },
  text2: {
    top: 310,
    width: 188,
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    left: 37,
  },
  buttonIcon: {
    top: -4,
    left: 2,
    borderRadius: Border.br_11xl,
    width: 356,
    height: 48,
    position: "absolute",
  },
  text3: {
    top: 11,
    left: 133,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  arrowForward1: {
    top: 7,
    left: 256,
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
    top: 393,
    left: 16,
    width: 354,
    height: 39,
    position: "absolute",
  },
  hide2Icon: {
    top: 312,
  },
  view1: {
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 85,
    width: 390,
    left: 0,
    top: 0,
  },
  text4: {
    left: 132,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  arrowBackIos1Icon: {
    left: 19,
    height: 24,
    width: 24,
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

export default IPhone14191;
