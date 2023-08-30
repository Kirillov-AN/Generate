import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const IPhone1423 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.view, styles.viewPosition5]}>
        <Text style={[styles.text, styles.textTypo21]}>Избранное</Text>
        <View style={[styles.view1, styles.viewLayout6]}>
          <Image
            style={[styles.child, styles.childLayout2]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.text1, styles.textTypo21]}>08:00</Text>
          <Text style={[styles.text2, styles.textTypo20]}>Траты</Text>
          <Text style={[styles.text3, styles.textPosition3]}>5423</Text>
          <Text style={[styles.text4, styles.textTypo19]}>₽</Text>
          <Image
            style={[styles.frameIcon, styles.iconFrameLayout1]}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
        </View>
        <View style={[styles.view2, styles.viewLayout6]}>
          <Image
            style={[styles.child, styles.childLayout2]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.tinkoff, styles.textTypo20]}>Счет Tinkoff</Text>
          <Text style={[styles.text3, styles.textPosition3]}>500 000</Text>
          <Text style={[styles.text6, styles.textTypo19]}>₽</Text>
          <Image
            style={[styles.frameIcon, styles.iconFrameLayout1]}
            contentFit="cover"
            source={require("../assets/mo.png")}
          />
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Image
            style={[styles.inner, styles.innerLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-12.png")}
          />
          <Text style={[styles.text7, styles.textPosition2]}>5%</Text>
        </View>
        <View style={[styles.view3, styles.viewLayout6]}>
          <Image
            style={[styles.child, styles.childLayout2]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.text2, styles.textTypo20]}>Накопления</Text>
          <Text style={[styles.text3, styles.textPosition3]}>1 500 000</Text>
          <Text style={[styles.text10, styles.text10Position]}>₽</Text>
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Image
            style={[styles.icon, styles.iconFrameLayout1]}
            contentFit="cover"
            source={require("../assets/3.png")}
          />
          <View style={[styles.ranking1, styles.text10Position]} />
        </View>
        <Text style={[styles.text11, styles.textTypo18]}>изменить</Text>
        <View style={[styles.view4, styles.viewLayout6]}>
          <Image
            style={[styles.child, styles.childLayout2]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.text12, styles.btcPosition1]}>2 135 432</Text>
          <Text style={[styles.text2, styles.textTypo20]}>
            Криптокошелек Trust BTC
          </Text>
          <Text style={[styles.text13, styles.textTypo19]}>1.123134</Text>
          <Text style={[styles.btc, styles.btcTypo]}>BTC</Text>
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Image
            style={[styles.frameIcon, styles.iconFrameLayout1]}
            contentFit="cover"
            source={require("../assets/bitcoinbtclogo-1.png")}
          />
          <Text style={[styles.text14, styles.text14Position]}>~</Text>
          <Text style={[styles.text15, styles.textPosition1]}>₽</Text>
          <Text style={[styles.text16, styles.textPosition2]}>11.86%</Text>
          <Image
            style={[styles.arrowIcon, styles.innerLayout1]}
            contentFit="cover"
            source={require("../assets/arrow-13.png")}
          />
        </View>
      </View>
      <View style={[styles.view5, styles.viewPosition5]}>
        <Text style={[styles.text, styles.textTypo21]}>Статистика</Text>
        <View style={[styles.rectangleView, styles.viewShadowBox2]} />
        <Text style={[styles.text18, styles.textTypo20]}>Траты</Text>
        <Image
          style={[styles.frameIcon1, styles.iconFrameLayout1]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text
          style={[styles.text19, styles.textTypo20]}
        >{`За последние 5 недель средняя сумма 
дневных трат составила 2342 ₽`}</Text>
        <View style={styles.lineView} />
        <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout8]} />
          <View style={[styles.groupItem, styles.button4Layout]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={[styles.groupChild1, styles.groupChildLayout6]} />
          <View style={[styles.groupChild2, styles.groupChildLayout6]} />
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout5]} />
          <View style={[styles.groupChild5, styles.groupChildLayout5]} />
          <View style={[styles.groupChild6, styles.groupChildLayout6]} />
          <View style={[styles.groupChild7, styles.groupChildLayout8]} />
          <View style={[styles.groupChild8, styles.groupLayout1]} />
          <View style={[styles.groupChild9, styles.groupChildLayout4]} />
          <View style={[styles.groupChild10, styles.groupChildLayout4]} />
          <View style={[styles.groupChild11, styles.groupChildLayout4]} />
          <View style={[styles.groupChild12, styles.groupChildLayout8]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout8]} />
          <View style={[styles.groupItem, styles.button4Layout]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={[styles.groupChild1, styles.groupChildLayout6]} />
          <View style={[styles.groupChild2, styles.groupChildLayout6]} />
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout5]} />
          <View style={[styles.groupChild5, styles.groupChildLayout5]} />
          <View style={[styles.groupChild6, styles.groupChildLayout6]} />
          <View style={[styles.groupChild7, styles.groupChildLayout8]} />
          <View style={[styles.groupChild8, styles.groupLayout1]} />
          <View style={[styles.groupChild9, styles.groupChildLayout4]} />
          <View style={[styles.groupChild10, styles.groupChildLayout4]} />
          <View style={[styles.groupChild11, styles.groupChildLayout4]} />
          <View style={[styles.groupChild12, styles.groupChildLayout8]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout8]} />
          <View style={[styles.groupItem, styles.button4Layout]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={[styles.groupChild1, styles.groupChildLayout6]} />
          <View style={[styles.groupChild2, styles.groupChildLayout6]} />
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout5]} />
          <View style={[styles.groupChild5, styles.groupChildLayout5]} />
          <View style={[styles.groupChild6, styles.groupChildLayout6]} />
          <View style={[styles.groupChild7, styles.groupChildLayout8]} />
          <View style={[styles.groupChild8, styles.groupLayout1]} />
          <View style={[styles.groupChild9, styles.groupChildLayout4]} />
          <View style={[styles.groupChild10, styles.groupChildLayout4]} />
          <View style={[styles.groupChild11, styles.groupChildLayout4]} />
          <View style={[styles.groupChild12, styles.groupChildLayout8]} />
        </View>
        <View style={[styles.child2, styles.childLayout2]} />
        <Text style={[styles.text20, styles.textTypo21]}>2342 ₽</Text>
        <Image
          style={[styles.arrowForwardIos1Icon4, styles.text14Position]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
      </View>
      <View style={[styles.view6, styles.viewLayout5]}>
        <View style={[styles.view7, styles.viewLayout5]} />
        <View style={styles.button}>
          <Image
            style={[styles.statistics1Icon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/statistics-11.png")}
          />
          <Text style={[styles.text21, styles.textTypo21]}>Сводка</Text>
        </View>
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("IPhone14211")}
        >
          <Text style={styles.text22}>{`Новая
операция`}</Text>
          <Image
            style={[styles.addCircle1Icon, styles.groupChild3Layout]}
            contentFit="cover"
            source={require("../assets/add-circle-11.png")}
          />
        </Pressable>
        <View style={styles.button2}>
          <Text style={[styles.text23, styles.textTypo21]}>Счета</Text>
          <Image
            style={[styles.walletsIcon, styles.frameIconLayout2]}
            contentFit="cover"
            source={require("../assets/wallets.png")}
          />
        </View>
        <View style={[styles.button3, styles.groupChildLayout6]}>
          <Text style={[styles.text24, styles.textTypo21]}>Контакты</Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconLayout2]}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
        <View style={[styles.button4, styles.button4Layout]}>
          <Text style={[styles.text25, styles.textPosition3]}>Долги</Text>
          <Image
            style={[styles.frameIcon3, styles.frameIconLayout2]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={styles.viewPosition4}>
        <View style={[styles.view9, styles.viewPosition4]} />
        <Text style={[styles.text26, styles.textPosition1]}>Сводка</Text>
        <Pressable
          style={[styles.menu1, styles.textPosition1]}
          onPress={() => navigation.navigate("IPhone1422")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/menu-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition5: {
    left: 27,
    width: 336,
    position: "absolute",
  },
  textTypo21: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  viewLayout6: {
    height: 87,
    left: 0,
    width: 336,
    position: "absolute",
  },
  childLayout2: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo20: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textPosition3: {
    top: 34,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textTypo19: {
    top: 42,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_5xl,
  },
  iconFrameLayout1: {
    height: 16,
    width: 16,
    overflow: "hidden",
    left: 10,
    position: "absolute",
  },
  arrowIconLayout1: {
    height: 18,
    width: 18,
    left: 309,
    overflow: "hidden",
  },
  innerLayout1: {
    height: 10,
    width: 7,
    top: 14,
    position: "absolute",
  },
  textPosition2: {
    top: 13,
    position: "absolute",
  },
  text10Position: {
    left: 165,
    position: "absolute",
  },
  textTypo18: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  btcPosition1: {
    top: 50,
    position: "absolute",
  },
  btcTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  text14Position: {
    top: 48,
    position: "absolute",
  },
  textPosition1: {
    top: 52,
    position: "absolute",
  },
  viewShadowBox2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
  rectangleLayout1: {
    width: 73,
    top: 131,
    height: 50,
    position: "absolute",
  },
  groupChildLayout8: {
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
  },
  button4Layout: {
    height: 46,
    position: "absolute",
  },
  groupLayout1: {
    height: 39,
    top: 11,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout6: {
    height: 44,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 40,
    position: "absolute",
  },
  groupChildLayout5: {
    height: 47,
    top: 3,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout4: {
    height: 43,
    top: 7,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  viewLayout5: {
    height: 105,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    left: 5,
    top: 0,
    position: "absolute",
  },
  frameIconLayout2: {
    height: 32,
    width: 32,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  viewPosition4: {
    height: 85,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    color: Color.black,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_5xl,
    left: 0,
    top: 0,
  },
  child: {
    top: -3,
    left: -4,
    width: 344,
    height: 95,
  },
  text1: {
    top: 54,
    left: 297,
    fontWeight: "300",
    color: Color.gray_200,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text2: {
    color: Color.salmon,
    fontWeight: "500",
    left: 30,
    top: 9,
  },
  text3: {
    left: 18,
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    color: Color.black,
  },
  text4: {
    left: 94,
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
    top: 9,
  },
  arrowForwardIos1Icon: {
    top: 10,
    position: "absolute",
  },
  view1: {
    top: 49,
  },
  tinkoff: {
    top: 10,
    color: Color.salmon,
    fontWeight: "500",
    left: 30,
  },
  text6: {
    left: 138,
    position: "absolute",
  },
  inner: {
    left: 276,
  },
  text7: {
    left: 287,
    color: Color.red,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  view2: {
    top: 156,
  },
  text10: {
    top: 42,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_5xl,
  },
  icon: {
    top: 8,
    overflow: "hidden",
  },
  ranking1: {
    top: 5,
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  view3: {
    top: 263,
  },
  text11: {
    left: 278,
    top: 13,
    position: "absolute",
    color: Color.salmon,
  },
  text12: {
    left: 170,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  text13: {
    left: 14,
    position: "absolute",
  },
  btc: {
    left: 119,
    top: 50,
    position: "absolute",
    color: Color.black,
  },
  text14: {
    left: 156,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.gray_100,
  },
  text15: {
    left: 241,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    color: Color.gray_200,
  },
  text16: {
    left: 267,
    color: Color.limegreen,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  arrowIcon: {
    left: 256,
  },
  view4: {
    top: 368,
  },
  view: {
    top: 111,
    height: 473,
    width: 336,
  },
  rectangleView: {
    top: 40,
    height: 161,
    borderRadius: Border.br_3xs,
    position: "absolute",
    left: 0,
    width: 336,
  },
  text18: {
    color: Color.salmon,
    fontWeight: "500",
    left: 30,
    top: 49,
  },
  frameIcon1: {
    overflow: "hidden",
    top: 49,
  },
  text19: {
    top: 77,
    left: 13,
    fontWeight: "500",
    color: Color.black,
  },
  lineView: {
    top: 119,
    left: 12,
    borderStyle: "solid",
    borderColor: "rgba(147, 137, 137, 0.8)",
    borderTopWidth: 1,
    width: 298,
    height: 1,
    position: "absolute",
  },
  groupChild: {
    left: 5,
    top: 0,
    position: "absolute",
    height: 50,
  },
  groupItem: {
    top: 4,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    left: 0,
  },
  groupInner: {
    left: 10,
    height: 39,
  },
  groupChild1: {
    left: 15,
    top: 6,
    height: 44,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
  },
  groupChild2: {
    left: 20,
    top: 6,
    height: 44,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
  },
  groupChild3: {
    left: 25,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    top: 10,
  },
  groupChild4: {
    left: 30,
  },
  groupChild5: {
    left: 35,
  },
  groupChild6: {
    left: 40,
    top: 6,
    height: 44,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
  },
  groupChild7: {
    left: 45,
    height: 41,
    top: 9,
    position: "absolute",
  },
  groupChild8: {
    left: 50,
  },
  groupChild9: {
    left: 55,
  },
  groupChild10: {
    left: 60,
  },
  groupChild11: {
    left: 65,
  },
  groupChild12: {
    top: 1,
    left: 70,
    height: 49,
    position: "absolute",
  },
  rectangleParent: {
    height: 50,
    left: 13,
  },
  rectangleGroup: {
    left: 88,
    height: 50,
  },
  rectangleContainer: {
    left: 163,
    height: 50,
  },
  child2: {
    top: 149,
    left: 11,
    backgroundColor: Color.salmon,
    width: 227,
    height: 2,
  },
  text20: {
    top: 137,
    left: 13,
    color: Color.salmon,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  arrowForwardIos1Icon4: {
    height: 18,
    width: 18,
    left: 309,
    overflow: "hidden",
  },
  view5: {
    top: 610,
    height: 201,
    width: 336,
  },
  view7: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    top: 0,
    height: 105,
    width: 390,
  },
  statistics1Icon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  text21: {
    top: 30,
    color: Color.salmon,
    fontSize: FontSize.size_3xs,
    left: 0,
    position: "absolute",
  },
  button: {
    left: 24,
    width: 35,
    height: 42,
    top: 14,
    position: "absolute",
  },
  text22: {
    top: 35,
    textAlign: "center",
    left: 1,
    color: Color.gray_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  addCircle1Icon: {
    top: -4,
    left: 4,
    width: 40,
    overflow: "hidden",
  },
  button1: {
    left: 172,
    width: 47,
    height: 59,
    top: 9,
    position: "absolute",
  },
  text23: {
    top: 33,
    left: 2,
    color: Color.gray_100,
    fontSize: FontSize.size_3xs,
    position: "absolute",
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
  text24: {
    top: 32,
    color: Color.gray_100,
    fontSize: FontSize.size_3xs,
    left: 0,
    position: "absolute",
  },
  frameIcon2: {
    left: 6,
  },
  button3: {
    left: 322,
    width: 45,
    top: 11,
  },
  text25: {
    color: Color.gray_100,
    fontSize: FontSize.size_3xs,
    left: 0,
  },
  frameIcon3: {
    left: 1,
  },
  button4: {
    left: 260,
    width: 33,
    top: 11,
  },
  view6: {
    top: 740,
    display: "none",
  },
  view9: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
  text26: {
    left: 158,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.black,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  menu1: {
    left: 19,
    width: 24,
    height: 24,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 1006,
    width: "100%",
  },
});

export default IPhone1423;
