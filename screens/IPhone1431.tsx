import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1431 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.iphone14}
      onPress={() => navigation.navigate("IPhone1441")}
    >
      <View style={[styles.qrCodeScan, styles.codeLayout]}>
        <View style={[styles.qrCodeScanChild, styles.childLayout]} />
        <Image
          style={styles.qrCodeScanner1Icon}
          contentFit="cover"
          source={require("../assets/qr-code-scanner-1.png")}
        />
        <Text style={[styles.qr, styles.qrTypo]}>{`Сканировать 
QR с чека`}</Text>
      </View>
      <View style={[styles.manuallyAdd, styles.codeLayout]}>
        <View style={[styles.manuallyAddChild, styles.iconLayout]} />
        <Image
          style={styles.qrCodeScanner1Icon}
          contentFit="cover"
          source={require("../assets/note-add-1.png")}
        />
        <Text style={[styles.text, styles.qrTypo]}>{`Ввести данные
вручную`}</Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.text1, styles.textTypo2]}>Избранное</Text>
        <View style={styles.directionsSubway2} />
        <Pressable
          style={styles.addBox1}
          onPress={() => navigation.navigate("IPhone14141")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/add-box-1.png")}
          />
        </Pressable>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text2, styles.textTypo1]}>Автомойка</Text>
          <Image
            style={[styles.pen1Icon, styles.text4Position]}
            contentFit="cover"
            source={require("../assets/pen-1.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text3, styles.textTypo1]}>Роснефть</Text>
          <Image
            style={[styles.pen1Icon, styles.text4Position]}
            contentFit="cover"
            source={require("../assets/pen-1.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.rectangleLayout]} />
        <Text style={[styles.text4, styles.text4Position]}>Кофе у дома</Text>
        <Image
          style={[styles.pen1Icon, styles.text4Position]}
          contentFit="cover"
          source={require("../assets/pen-1.png")}
        />
      </View>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
      <View style={styles.viewPosition}>
        <View style={[styles.view2, styles.viewPosition]} />
        <Text style={[styles.text5, styles.textTypo2]}>Новая операция</Text>
        <View style={styles.parent}>
          <View style={[styles.view3, styles.view3Layout]}>
            <View style={[styles.child, styles.view3Layout]} />
            <View style={styles.item} />
            <Text style={[styles.text6, styles.textTypo]}>Расход</Text>
          </View>
          <Pressable
            style={[styles.pressable, styles.view3Layout]}
            onPress={() => navigation.navigate("IPhone1421")}
          >
            <View style={[styles.child, styles.view3Layout]} />
            <Text style={[styles.text7, styles.textTypo]}>Доход</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  codeLayout: {
    height: 80,
    width: 80,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  qrTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_3xs,
    top: 85,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  rectangleLayout: {
    width: 350,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  text4Position: {
    top: 20,
    position: "absolute",
  },
  viewPosition: {
    height: 119,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  view3Layout: {
    width: 136,
    height: 28,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    top: 5,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  qrCodeScanChild: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 80,
    width: 80,
    position: "absolute",
  },
  qrCodeScanner1Icon: {
    top: 13,
    left: 13,
    width: 54,
    overflow: "hidden",
    height: 54,
    position: "absolute",
  },
  qr: {
    left: 7,
  },
  qrCodeScan: {
    left: 235,
    top: 161,
    width: 80,
  },
  manuallyAddChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text: {
    left: 4,
  },
  manuallyAdd: {
    left: 70,
    top: 161,
    width: 80,
  },
  text1: {
    left: 8,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    top: 0,
  },
  directionsSubway2: {
    top: 225,
    left: 54,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  addBox1: {
    left: 320,
    width: 32,
    height: 32,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    height: 54,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  text2: {
    top: 19,
    left: 20,
    position: "absolute",
  },
  pen1Icon: {
    left: 317,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 117,
    height: 58,
    left: 2,
    width: 350,
  },
  text3: {
    top: 17,
    left: 18,
    position: "absolute",
  },
  rectangleGroup: {
    top: 188,
    left: 2,
    width: 350,
    height: 54,
  },
  view: {
    top: 303,
    width: 352,
    height: 335,
    left: 18,
    position: "absolute",
  },
  text4: {
    left: 17,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  rectangleContainer: {
    top: 352,
    left: 18,
    height: 54,
  },
  icon1: {
    top: 762,
    height: 83,
    width: 390,
    left: 0,
    position: "absolute",
  },
  view2: {
    backgroundColor: Color.white,
  },
  text5: {
    top: 52,
    left: 115,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  child: {
    backgroundColor: Color.white,
    left: 0,
  },
  item: {
    top: 27,
    left: -1,
    borderStyle: "solid",
    borderColor: "#e96757",
    borderTopWidth: 2,
    width: 138,
    height: 2,
    position: "absolute",
  },
  text6: {
    left: 44,
  },
  view3: {
    left: 0,
  },
  text7: {
    left: 47,
  },
  pressable: {
    left: 136,
  },
  parent: {
    top: 91,
    left: 59,
    width: 272,
    height: 28,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 845,
    width: "100%",
  },
});

export default IPhone1431;
