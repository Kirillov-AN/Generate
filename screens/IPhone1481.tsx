import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone1481 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14, styles.iconLayout1]}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.terroirCafe, styles.textTypo]}>Terroir cafe</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/local-cafe-11.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.terroirCafe, styles.textTypo]}>BP</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/local-gas-station-11.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.lineViewPosition]} />
        <Text style={[styles.terroirCafe, styles.textTypo]}>Автомойка</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/local-car-wash-11.png")}
        />
      </View>
      <Image
        style={styles.signInButton}
        contentFit="cover"
        source={require("../assets/sign-in-button.png")}
      />
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>Выбор организации</Text>
        <Pressable
          style={styles.arrowBackIos1}
          onPress={() => navigation.navigate("IPhone14151")}
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
        <Text style={[styles.text2, styles.textTypo]}>
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
    overflow: "hidden",
    width: "100%",
  },
  rectangleLayout: {
    height: 35,
    width: 350,
    left: 25,
    position: "absolute",
  },
  lineViewPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
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
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    top: 0,
    left: 0,
    height: 35,
    width: 350,
  },
  terroirCafe: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    left: 18,
    top: 9,
  },
  localCafe1Icon: {
    left: 323,
    top: 9,
    width: 16,
  },
  rectangleParent: {
    top: 189,
  },
  rectangleGroup: {
    top: 234,
  },
  rectangleContainer: {
    top: 279,
  },
  signInButton: {
    top: 341,
    width: 356,
    left: 18,
    height: 35,
    position: "absolute",
  },
  view1: {
    backgroundColor: Color.white,
  },
  text1: {
    top: 50,
    left: 95,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  icon: {
    height: "100%",
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
  text2: {
    top: 34,
    left: 5,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  zoom1Icon: {
    top: 35,
    left: 314,
  },
  lineParent: {
    top: 113,
    width: 340,
    height: 60,
    left: 25,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
  },
});

export default IPhone1481;
