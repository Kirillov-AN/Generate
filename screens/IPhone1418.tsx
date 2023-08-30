import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1418 = () => {
  return (
    <View style={styles.iphone14}>
      <View style={[styles.view, styles.viewLayout1]}>
        <Text style={[styles.text, styles.textTypo2]}>Статистика</Text>
        <View style={[styles.child, styles.viewLayout1]} />
        <Text style={[styles.text1, styles.textTypo]}>Траты</Text>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text
          style={[styles.text2, styles.textTypo1]}
        >{`За последние 5 недель средняя сумма 
дневных расходов составила 2342 ₽`}</Text>
        <View style={styles.item} />
        <View style={[styles.rectangleParent, styles.groupLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout2]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout3]} />
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout2]} />
          <View style={[styles.groupChild6, styles.text4Position]} />
          <View style={[styles.groupChild7, styles.groupLayout]} />
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout2]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout3]} />
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout2]} />
          <View style={[styles.groupChild6, styles.text4Position]} />
          <View style={[styles.groupChild7, styles.groupLayout]} />
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout3]} />
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <View style={[styles.groupItem, styles.groupChildLayout3]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout2]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout3]} />
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
          <View style={[styles.groupChild5, styles.groupChildLayout2]} />
          <View style={[styles.groupChild6, styles.text4Position]} />
          <View style={[styles.groupChild7, styles.groupLayout]} />
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <View style={[styles.groupChild10, styles.groupChildLayout]} />
          <View style={[styles.groupChild11, styles.groupChildLayout3]} />
        </View>
        <View style={styles.inner} />
        <Text style={[styles.text3, styles.textTypo]}>2342 ₽</Text>
        <Image
          style={[styles.arrowForwardIos1Icon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios-1.png")}
        />
      </View>
      <View style={[styles.view1, styles.viewLayout1]}>
        <View style={[styles.view2, styles.viewLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.viewLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-4.png")}
          />
          <Text style={[styles.text4, styles.text4Position]}>Расходы</Text>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text5, styles.textTypo2]}>5 423</Text>
            <Text style={[styles.text6, styles.textTypo2]}>₽</Text>
          </View>
          <Image
            style={[styles.frameIcon1, styles.text4Position]}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <Image
            style={[styles.arrowForwardIos1Icon1, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
        </View>
        <View style={[styles.view3, styles.viewLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.viewLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-4.png")}
          />
          <Text style={[styles.text4, styles.text4Position]}>Доходы</Text>
          <View style={[styles.wrapper, styles.parentPosition]}>
            <Text style={[styles.text5, styles.textTypo2]}>260 000</Text>
          </View>
          <Text style={[styles.text9, styles.textTypo2]}>₽</Text>
          <Image
            style={[styles.frameIcon1, styles.text4Position]}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <Image
            style={[styles.arrowForwardIos1Icon1, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-forward-ios-1.png")}
          />
        </View>
        <Image
          style={[
            styles.businessColorMoney12SvgrepIcon,
            styles.frameIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/businesscolormoney12svgrepocom-1.png")}
        />
      </View>
      <View style={styles.viewPosition}>
        <View style={[styles.view5, styles.viewPosition]} />
        <Text style={[styles.text10, styles.textTypo2]}>Сводка</Text>
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout1: {
    width: 336,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  textTypo: {
    color: Color.salmon,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  frameIconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
    left: 10,
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  groupLayout1: {
    height: 50,
    position: "absolute",
  },
  groupChildLayout3: {
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
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
  text4Position: {
    top: 9,
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
  arrowIconLayout: {
    height: 18,
    width: 18,
    left: 309,
    overflow: "hidden",
    position: "absolute",
  },
  viewLayout: {
    height: 87,
    left: 0,
    width: 336,
    position: "absolute",
  },
  parentPosition: {
    left: 18,
    top: 34,
    height: 39,
    position: "absolute",
  },
  viewPosition: {
    height: 85,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    left: 0,
    top: 0,
  },
  child: {
    top: 40,
    height: 161,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  text1: {
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 30,
    top: 49,
    position: "absolute",
  },
  frameIcon: {
    top: 49,
    position: "absolute",
  },
  text2: {
    top: 77,
    left: 13,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  item: {
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
    height: 50,
    position: "absolute",
    top: 0,
  },
  groupItem: {
    top: 4,
    height: 46,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    left: 10,
    height: 39,
    top: 11,
  },
  rectangleView: {
    left: 15,
  },
  groupChild1: {
    left: 20,
  },
  groupChild2: {
    left: 25,
    height: 40,
    top: 10,
    position: "absolute",
  },
  groupChild3: {
    left: 30,
  },
  groupChild4: {
    left: 35,
  },
  groupChild5: {
    left: 40,
  },
  groupChild6: {
    left: 45,
    height: 41,
    width: 3,
    backgroundColor: Color.gainsboro,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
  },
  groupChild7: {
    left: 50,
  },
  groupChild8: {
    left: 55,
  },
  groupChild9: {
    left: 60,
  },
  groupChild10: {
    left: 65,
  },
  groupChild11: {
    top: 1,
    left: 70,
    height: 49,
    position: "absolute",
  },
  rectangleParent: {
    width: 73,
    top: 131,
    height: 50,
    left: 13,
  },
  rectangleGroup: {
    left: 88,
    width: 73,
    top: 131,
    height: 50,
  },
  rectangleContainer: {
    left: 163,
    width: 73,
    top: 131,
    height: 50,
  },
  inner: {
    top: 149,
    left: 11,
    backgroundColor: Color.salmon,
    width: 227,
    height: 2,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text3: {
    top: 137,
    fontSize: FontSize.size_3xs,
    left: 13,
    fontWeight: "700",
    position: "absolute",
  },
  arrowForwardIos1Icon: {
    top: 48,
  },
  view: {
    top: 337,
    left: 27,
    height: 201,
  },
  rectangleIcon: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  text4: {
    color: Color.salmon,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 30,
  },
  text5: {
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  text6: {
    top: 8,
    left: 85,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  parent: {
    width: 90,
  },
  frameIcon1: {
    overflow: "hidden",
    height: 16,
    width: 16,
    left: 10,
  },
  arrowForwardIos1Icon1: {
    top: 10,
  },
  view2: {
    top: 0,
  },
  wrapper: {
    width: 116,
  },
  text9: {
    top: 42,
    left: 138,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  view3: {
    top: 108,
  },
  businessColorMoney12SvgrepIcon: {
    top: 117,
    position: "absolute",
  },
  view1: {
    top: 113,
    left: 22,
    height: 202,
  },
  view5: {
    backgroundColor: Color.white,
  },
  text10: {
    top: 52,
    left: 158,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  icon: {
    top: 762,
    height: 83,
    width: 390,
    left: 0,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 845,
  },
});

export default IPhone1418;
