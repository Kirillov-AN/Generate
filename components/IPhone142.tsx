import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1420 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.view, styles.viewLayout1]}>
        <View style={[styles.view1, styles.viewShadowBox]} />
        <Text style={styles.text}>Новая операция</Text>
        <Pressable
          style={styles.menu1}
          onPress={() => navigation.navigate("IPhone1422")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/menu-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.child, styles.itemLayout]}
          onPress={() => navigation.navigate("IPhone14211")}
        />
        <Text style={[styles.text1, styles.textTypo7]}>Списание</Text>
        <View style={[styles.item, styles.itemLayout]} />
        <Text style={[styles.text2, styles.textTypo7]}>Начисление</Text>
        <View style={styles.inner} />
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.view3, styles.viewLayout]} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("IPhone1423")}
        >
          <Image
            style={styles.statistics1Icon}
            contentFit="cover"
            source={require("../assets/statistics-1.png")}
          />
          <Text style={[styles.text3, styles.textTypo6]}>Сводка</Text>
        </Pressable>
        <View style={styles.button1}>
          <Text style={styles.text4}>{`Новая
операция`}</Text>
          <Image
            style={styles.addCircle1Icon}
            contentFit="cover"
            source={require("../assets/add-circle-1.png")}
          />
        </View>
        <View style={styles.button2}>
          <Text style={[styles.text5, styles.textTypo6]}>Счета</Text>
          <Image
            style={[styles.walletsIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/wallets.png")}
          />
        </View>
        <View style={[styles.button3, styles.buttonPosition]}>
          <Text style={[styles.text6, styles.textTypo6]}>Контакты</Text>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
        <View style={[styles.button4, styles.buttonPosition]}>
          <Text style={[styles.text7, styles.textTypo6]}>Долги</Text>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout1: {
    height: 119,
    width: 390,
    left: 0,
    position: "absolute",
  },
  viewShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    top: 0,
  },
  itemLayout: {
    height: 28,
    width: 164,
    top: 91,
    backgroundColor: Color.white,
    position: "absolute",
  },
  textTypo7: {
    fontSize: FontSize.size_base,
    top: 92,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  viewLayout: {
    height: 105,
    width: 390,
    left: 0,
    position: "absolute",
  },
  textTypo6: {
    color: Color.gray_100,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  frameIconLayout: {
    height: 32,
    width: 32,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  buttonPosition: {
    top: 11,
    position: "absolute",
  },
  view1: {
    height: 119,
    width: 390,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 115,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 52,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  menu1: {
    left: 19,
    width: 24,
    height: 24,
    top: 52,
    position: "absolute",
  },
  child: {
    left: 31,
  },
  text1: {
    left: 76,
  },
  item: {
    left: 195,
  },
  text2: {
    left: 229,
  },
  inner: {
    top: 118,
    left: 194,
    borderStyle: "solid",
    borderColor: "#e96757",
    borderTopWidth: 3,
    width: 167,
    height: 3,
    position: "absolute",
  },
  view: {
    top: 0,
  },
  view3: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    top: 0,
  },
  statistics1Icon: {
    left: 5,
    width: 26,
    height: 26,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  text3: {
    top: 30,
    left: 0,
  },
  button: {
    top: 14,
    left: 24,
    width: 35,
    height: 42,
    position: "absolute",
  },
  text4: {
    top: 35,
    color: Color.salmon,
    textAlign: "center",
    left: 1,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  addCircle1Icon: {
    top: -5,
    left: 4,
    width: 40,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  button1: {
    top: 9,
    left: 172,
    width: 47,
    height: 59,
    position: "absolute",
  },
  text5: {
    top: 33,
    left: 2,
  },
  walletsIcon: {
    left: 0,
  },
  button2: {
    left: 99,
    height: 45,
    width: 32,
    top: 11,
    position: "absolute",
  },
  text6: {
    top: 32,
    left: 0,
  },
  frameIcon: {
    left: 6,
  },
  button3: {
    left: 322,
    width: 45,
    height: 44,
  },
  text7: {
    top: 34,
    left: 0,
  },
  frameIcon1: {
    left: 1,
  },
  button4: {
    left: 260,
    width: 33,
    height: 46,
  },
  view2: {
    top: 740,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 1006,
    width: "100%",
  },
});

export default IPhone1420;
