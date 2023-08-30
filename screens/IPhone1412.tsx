import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone1412 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14, styles.iconLayout]}>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone146")}
      >
        <Image
          style={[styles.buttonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Добавить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>
          Добавление в избранное
        </Text>
        <Pressable
          style={styles.arrowBackIos1}
          onPress={() => navigation.navigate("IPhone143")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back-ios-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.lineParent, styles.buttonIconLayout]}>
        <View style={styles.frameChild} />
        <Text style={[styles.text2, styles.textTypo]}>Введите название...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonIconLayout: {
    height: 40,
    position: "absolute",
  },
  textTypo: {
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
    top: 201,
    left: 18,
    width: 354,
    height: 39,
    position: "absolute",
  },
  view1: {
    backgroundColor: Color.white,
  },
  text1: {
    top: 50,
    left: 70,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
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
  frameChild: {
    top: 35,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
    left: 0,
    position: "absolute",
  },
  text2: {
    top: 14,
    left: 5,
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
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

export default IPhone1412;
