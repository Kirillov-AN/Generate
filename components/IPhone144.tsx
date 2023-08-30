import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const IPhone1422 = () => {
  return (
    <View style={styles.iphone14}>
      <View style={[styles.view, styles.viewPosition3]}>
        <Text style={[styles.text, styles.textTypo17]}>Избранное</Text>
        <View style={[styles.view1, styles.viewLayout4]}>
          <Image
            style={[styles.child, styles.childLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>08:00</Text>
          <Text style={[styles.text2, styles.textTypo16]}>Траты</Text>
          <Text style={[styles.text3, styles.textTypo15]}>₽</Text>
          <Image
            style={[styles.frameIcon, styles.iconFrameLayout]}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
        </View>
        <View style={[styles.view2, styles.view2Position]}>
          <Image
            style={[styles.child, styles.childLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.tinkoff, styles.tinkoffPosition]}>
            Счет Tinkoff
          </Text>
          <Text style={[styles.text4, styles.textTypo17]}>500 000</Text>
          <Text style={[styles.text5, styles.textTypo15]}>₽</Text>
          <Image
            style={[styles.frameIcon, styles.iconFrameLayout]}
            contentFit="cover"
            source={require("../assets/mo.png")}
          />
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Image
            style={[styles.inner, styles.innerLayout]}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
          <Text style={[styles.text6, styles.textTypo14]}>5%</Text>
        </View>
        <View style={[styles.view3, styles.viewLayout4]}>
          <Image
            style={[styles.child, styles.childLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.text2, styles.textTypo16]}>Накопления</Text>
          <Text style={[styles.text4, styles.textTypo17]}>1 500 000</Text>
          <Text style={[styles.text9, styles.text9Position]}>₽</Text>
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Image
            style={[styles.icon, styles.iconFrameLayout]}
            contentFit="cover"
            source={require("../assets/3.png")}
          />
          <View style={[styles.ranking1, styles.text9Position]} />
        </View>
        <Text style={[styles.text10, styles.textTypo13]}>изменить</Text>
        <View style={[styles.view4, styles.viewLayout4]}>
          <Image
            style={[styles.child, styles.childLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.text11, styles.btcPosition]}>2 135 432</Text>
          <Text style={[styles.text2, styles.textTypo16]}>
            Криптокошелек Trust BTC
          </Text>
          <Text style={[styles.text12, styles.textPosition]}>1.123134</Text>
          <Text style={[styles.btc, styles.textTypo12]}>BTC</Text>
          <Image
            style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
          <Image
            style={[styles.frameIcon, styles.iconFrameLayout]}
            contentFit="cover"
            source={require("../assets/bitcoinbtclogo-1.png")}
          />
          <Text style={[styles.text13, styles.text13Position]}>~</Text>
          <Text style={[styles.text14, styles.textTypo13]}>₽</Text>
          <Text style={[styles.text15, styles.textTypo14]}>11.86%</Text>
          <Image
            style={[styles.arrowIcon, styles.innerLayout]}
            contentFit="cover"
            source={require("../assets/arrow-11.png")}
          />
        </View>
      </View>
      <View style={[styles.view5, styles.viewPosition3]}>
        <Text style={[styles.text, styles.textTypo17]}>Статистика</Text>
        <View style={[styles.rectangleView, styles.child3ShadowBox]} />
        <Text style={[styles.text17, styles.textTypo16]}>Траты</Text>
        <Image
          style={[styles.frameIcon1, styles.iconFrameLayout]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text
          style={[styles.text18, styles.textTypo16]}
        >{`За последние 5 недель средняя сумма 
дневных трат составила 2342 ₽`}</Text>
        <View style={[styles.lineView, styles.child6Border]} />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout2]} />
          <View style={styles.groupChild3} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout1]} />
          <View style={[styles.groupChild6, styles.groupChildLayout2]} />
          <View style={[styles.groupChild7, styles.groupChildLayout3]} />
          <View style={[styles.groupChild8, styles.groupLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout]} />
          <View style={[styles.groupChild12, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout2]} />
          <View style={styles.groupChild3} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout1]} />
          <View style={[styles.groupChild6, styles.groupChildLayout2]} />
          <View style={[styles.groupChild7, styles.groupChildLayout3]} />
          <View style={[styles.groupChild8, styles.groupLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout]} />
          <View style={[styles.groupChild12, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout2]} />
          <View style={styles.groupChild3} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout1]} />
          <View style={[styles.groupChild6, styles.groupChildLayout2]} />
          <View style={[styles.groupChild7, styles.groupChildLayout3]} />
          <View style={[styles.groupChild8, styles.groupLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout]} />
          <View style={[styles.groupChild12, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.child2, styles.childLayout1]} />
        <Text style={[styles.text19, styles.textPosition]}>2342 ₽</Text>
        <Image
          style={[styles.arrowForwardIos1Icon4, styles.text13Position]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
      </View>
      <View style={[styles.view6, styles.view6Position]}>
        <View style={[styles.child3, styles.view6Position]} />
        <View style={[styles.view7, styles.viewPosition2]}>
          <View style={[styles.child4, styles.childPosition]} />
        </View>
        <View style={[styles.cogwheel1, styles.view2Position]} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={[styles.text20, styles.textTypo12]}>Настройки</Text>
        <Text style={styles.text21}>Мойша</Text>
        <View style={[styles.view8, styles.viewPosition2]}>
          <View style={[styles.child5, styles.childPosition]} />
          <Text style={styles.text22}>О приложении</Text>
        </View>
        <Text style={[styles.rhodeaV010, styles.text1Typo]}>{`Rhodea

v 0.1.0 beta`}</Text>
        <View style={styles.view9}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.rabSite1Icon}
            contentFit="cover"
            source={require("../assets/rab-site-1.png")}
          />
        </View>
        <View style={[styles.child6, styles.child6Border]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition3: {
    left: 27,
    width: 336,
    position: "absolute",
  },
  textTypo17: {
    fontFamily: FontFamily.helveticaNeue,
    textAlign: "left",
  },
  viewLayout4: {
    height: 87,
    left: 0,
    width: 336,
  },
  childLayout1: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textTypo16: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  textTypo15: {
    top: 42,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_5xl,
  },
  iconFrameLayout: {
    height: 16,
    width: 16,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  arrowIconLayout: {
    height: 18,
    width: 18,
    left: 309,
    overflow: "hidden",
  },
  view2Position: {
    top: 156,
    position: "absolute",
  },
  tinkoffPosition: {
    top: 10,
    position: "absolute",
  },
  innerLayout: {
    height: 12,
    width: 7,
    top: 13,
    position: "absolute",
  },
  textTypo14: {
    top: 12,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  text9Position: {
    left: 165,
    position: "absolute",
  },
  textTypo13: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  btcPosition: {
    top: 50,
    fontWeight: "500",
    position: "absolute",
  },
  textPosition: {
    left: 14,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textTypo12: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  text13Position: {
    top: 48,
    position: "absolute",
  },
  child3ShadowBox: {
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
  child6Border: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(147, 137, 137, 0.8)",
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleLayout: {
    width: 73,
    top: 131,
    height: 50,
    position: "absolute",
  },
  groupChildLayout3: {
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupLayout: {
    height: 39,
    top: 11,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 44,
    top: 6,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 47,
    top: 3,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 43,
    top: 7,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    position: "absolute",
  },
  view6Position: {
    width: 331,
    left: 0,
    position: "absolute",
  },
  viewPosition2: {
    height: 19,
    left: 17,
    position: "absolute",
  },
  childPosition: {
    left: -17,
    width: 331,
    height: 40,
    backgroundColor: Color.white,
    position: "absolute",
  },
  text: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.helveticaNeue,
    left: 0,
    top: 0,
    position: "absolute",
  },
  child: {
    left: -4,
    width: 344,
    height: 95,
    top: -3,
  },
  text1: {
    top: 54,
    left: 297,
    fontWeight: "300",
    color: Color.gray_200,
    textAlign: "left",
  },
  text2: {
    color: Color.salmon,
    fontWeight: "500",
    left: 30,
    top: 9,
    position: "absolute",
  },
  text3: {
    left: 94,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  frameIcon: {
    top: 9,
  },
  arrowForwardIos1Icon: {
    top: 10,
    position: "absolute",
  },
  view1: {
    top: 49,
    position: "absolute",
  },
  tinkoff: {
    color: Color.salmon,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    left: 30,
  },
  text4: {
    top: 34,
    left: 18,
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  text5: {
    left: 138,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  inner: {
    left: 273,
  },
  text6: {
    left: 283,
    color: Color.red,
  },
  view2: {
    height: 87,
    left: 0,
    width: 336,
  },
  text9: {
    top: 42,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  icon: {
    top: 8,
  },
  ranking1: {
    top: 5,
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  view3: {
    top: 263,
    position: "absolute",
  },
  text10: {
    left: 278,
    top: 13,
    fontSize: FontSize.size_smi,
    color: Color.salmon,
  },
  text11: {
    left: 170,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  text12: {
    top: 42,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_5xl,
  },
  btc: {
    left: 119,
    top: 50,
    fontWeight: "500",
    position: "absolute",
    color: Color.black,
  },
  text13: {
    left: 156,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.gray_100,
    fontWeight: "500",
  },
  text14: {
    top: 52,
    left: 241,
    fontWeight: "500",
    color: Color.gray_200,
  },
  text15: {
    left: 259,
    color: Color.limegreen,
  },
  arrowIcon: {
    left: 249,
  },
  view4: {
    top: 368,
    position: "absolute",
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
  text17: {
    color: Color.salmon,
    fontWeight: "500",
    left: 30,
    top: 49,
    position: "absolute",
  },
  frameIcon1: {
    top: 49,
  },
  text18: {
    top: 77,
    left: 13,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  lineView: {
    top: 119,
    left: 12,
    width: 298,
  },
  groupChild: {
    left: 5,
    height: 50,
    top: 0,
  },
  groupItem: {
    top: 4,
    height: 46,
    left: 0,
  },
  groupInner: {
    left: 10,
    height: 39,
    top: 11,
  },
  groupChild1: {
    left: 15,
  },
  groupChild2: {
    left: 20,
  },
  groupChild3: {
    left: 25,
    height: 40,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    top: 10,
    position: "absolute",
  },
  groupChild4: {
    left: 30,
  },
  groupChild5: {
    left: 35,
  },
  groupChild6: {
    left: 40,
  },
  groupChild7: {
    left: 45,
    height: 41,
    top: 9,
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
  text19: {
    top: 143,
    fontSize: FontSize.size_8xs,
    color: Color.salmon,
    fontWeight: "700",
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
  child3: {
    height: 870,
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
  },
  child4: {
    top: -9,
  },
  view7: {
    top: 154,
    width: 82,
  },
  cogwheel1: {
    left: 294,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupIcon: {
    height: "2.09%",
    width: "5.44%",
    top: "18.49%",
    right: "90.33%",
    bottom: "79.42%",
    left: "4.23%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text20: {
    top: 158,
    left: 43,
    color: Color.black,
    position: "absolute",
  },
  text21: {
    top: 82,
    fontSize: FontSize.size_xl,
    left: 17,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  child5: {
    top: -4,
  },
  text22: {
    top: 6,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    left: 0,
    position: "absolute",
  },
  view8: {
    top: 189,
    width: 111,
  },
  rhodeaV010: {
    top: 787,
    left: 141,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 42,
    color: Color.gray_100,
  },
  ellipseIcon: {
    top: -5,
    width: 54,
    height: 54,
    left: 0,
    position: "absolute",
  },
  rabSite1Icon: {
    left: 2,
    borderRadius: Border.br_6xl,
    width: 50,
    height: 50,
    top: -3,
    position: "absolute",
  },
  view9: {
    top: 68,
    left: 255,
    width: 63,
    height: 52,
    position: "absolute",
  },
  child6: {
    top: 138,
    left: -1,
    width: 333,
  },
  view6: {
    top: -15,
    height: 860,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 1006,
    overflow: "hidden",
  },
});

export default IPhone1422;
