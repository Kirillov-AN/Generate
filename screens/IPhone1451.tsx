import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone1451 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14, styles.iconLayout1]}>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone1471")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>Продолжить</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>СТО</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>Кафе</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/local-cafe-11.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>Продуктовый магазин</Text>
      </View>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text4, styles.textTypo1]}>Выбор категории</Text>
        <Pressable
          style={styles.arrowBackIos1}
          onPress={() => navigation.navigate("IPhone1471")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-back-ios-1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.lineParent}>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <Text style={[styles.text5, styles.textTypo]}>
          Поиск по названию...
        </Text>
        <Image
          style={[styles.zoom1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/zoom-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 350,
    left: 21,
    position: "absolute",
  },
  lineViewPosition: {
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
  iconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
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
    height: 40,
    position: "absolute",
  },
  text: {
    top: 10,
    left: 133,
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
    top: 367,
    left: 11,
    width: 354,
    height: 39,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    top: 0,
    left: 0,
    height: 35,
    width: 350,
  },
  text1: {
    left: 18,
    top: 9,
  },
  rectangleParent: {
    top: 199,
  },
  localCafe1Icon: {
    left: 323,
    top: 9,
  },
  rectangleGroup: {
    top: 252,
  },
  rectangleContainer: {
    top: 304,
  },
  view1: {
    backgroundColor: Color.white,
  },
  text4: {
    top: 50,
    left: 109,
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
  lineView: {
    top: 55,
    borderStyle: "solid",
    borderColor: "#7a7a7a",
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  text5: {
    top: 34,
    left: 5,
  },
  zoom1Icon: {
    top: 35,
    left: 314,
  },
  lineParent: {
    top: 113,
    left: 25,
    width: 340,
    height: 60,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    overflow: "hidden",
  },
});

export default IPhone1451;
