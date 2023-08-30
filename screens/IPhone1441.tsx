import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1441 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Pressable
        style={[styles.qrCodeScan, styles.qrCodeScanLayout]}
        onPress={() => navigation.navigate("IPhone14121")}
      >
        <View style={[styles.qrCodeScanChild, styles.childLayout]} />
        <Image
          style={styles.qrCodeScanner1Icon}
          contentFit="cover"
          source={require("../assets/qr-code-scanner-1.png")}
        />
        <Text style={[styles.qr, styles.qrTypo]}>{`Сканировать 
QR с чека`}</Text>
      </Pressable>
      <Pressable
        style={[styles.manuallyAdd, styles.qrCodeScanLayout]}
        onPress={() => navigation.navigate("IPhone14151")}
      >
        <View style={[styles.manuallyAddChild, styles.childLayout]} />
        <Image
          style={styles.qrCodeScanner1Icon}
          contentFit="cover"
          source={require("../assets/note-add-1.png")}
        />
        <Text style={[styles.text, styles.qrTypo]}>{`Ввести данные
вручную`}</Text>
      </Pressable>
      <View style={styles.view}>
        <Text style={[styles.text1, styles.textTypo2]}>Избранное</Text>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("IPhone1431")}
        >
          <Text style={[styles.text2, styles.textTypo2]}>изменить</Text>
        </Pressable>
        <View style={[styles.directionsSubway2, styles.localIconLayout]} />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text3, styles.textTypo1]}>Кофе у дома</Text>
          <Image
            style={[styles.localCafe1Icon, styles.localIconLayout]}
            contentFit="cover"
            source={require("../assets/local-cafe-1.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text4, styles.textTypo1]}>Автомойка</Text>
          <Image
            style={[styles.localCarWash1Icon, styles.localIconLayout]}
            contentFit="cover"
            source={require("../assets/local-car-wash-1.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text5, styles.textTypo1]}>Роснефть</Text>
          <Image
            style={[styles.localCafe1Icon, styles.localIconLayout]}
            contentFit="cover"
            source={require("../assets/local-gas-station-1.png")}
          />
        </View>
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
      <View style={styles.viewPosition}>
        <View style={[styles.view2, styles.viewPosition]} />
        <Text style={[styles.text6, styles.textTypo2]}>Новая операция</Text>
        <View style={styles.parent}>
          <View style={[styles.view3, styles.view3Layout]}>
            <View style={[styles.child, styles.view3Layout]} />
            <View style={styles.item} />
            <Text style={[styles.text7, styles.textTypo]}>Расход</Text>
          </View>
          <Pressable
            style={[styles.pressable1, styles.view3Layout]}
            onPress={() => navigation.navigate("IPhone1421")}
          >
            <View style={[styles.child, styles.view3Layout]} />
            <Text style={[styles.text8, styles.textTypo]}>Доход</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeScanLayout: {
    height: 109,
    top: 161,
    width: 80,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  qrTypo: {
    textAlign: "center",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_3xs,
    top: 85,
    color: Color.black,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  localIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
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
    height: 80,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    width: 80,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  qrCodeScanner1Icon: {
    left: 13,
    width: 54,
    overflow: "hidden",
    height: 54,
    top: 13,
    position: "absolute",
  },
  qr: {
    left: 7,
  },
  qrCodeScan: {
    left: 235,
  },
  manuallyAddChild: {
    height: "73.39%",
    top: "0%",
    right: "0%",
    bottom: "26.61%",
    left: "0%",
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  text: {
    left: 4,
  },
  manuallyAdd: {
    left: 70,
  },
  text1: {
    left: 8,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.black,
    textAlign: "left",
    position: "absolute",
    top: 0,
  },
  text2: {
    fontSize: FontSize.size_smi,
    color: Color.salmon,
  },
  pressable: {
    left: 286,
    top: 13,
    position: "absolute",
  },
  directionsSubway2: {
    top: 225,
    left: 54,
  },
  frameChild: {
    height: 54,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  text3: {
    top: 20,
    left: 17,
  },
  localCafe1Icon: {
    top: 15,
    left: 315,
  },
  rectangleParent: {
    top: 50,
    left: 2,
    width: 350,
    height: 54,
  },
  text4: {
    top: 19,
    left: 20,
  },
  localCarWash1Icon: {
    top: 14,
    left: 314,
  },
  rectangleGroup: {
    top: 117,
    height: 58,
    left: 2,
    width: 350,
  },
  text5: {
    top: 17,
    left: 18,
  },
  rectangleContainer: {
    top: 188,
    left: 2,
    width: 350,
    height: 54,
  },
  view: {
    top: 295,
    width: 352,
    height: 283,
    left: 18,
    position: "absolute",
  },
  icon: {
    top: 762,
    height: 83,
    width: 390,
    left: 0,
    position: "absolute",
  },
  view2: {
    backgroundColor: Color.white,
  },
  text6: {
    top: 52,
    left: 115,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  child: {
    backgroundColor: Color.white,
    left: 0,
  },
  item: {
    top: 27,
    left: -1,
    borderStyle: "solid",
    borderColor: "#fa5f53",
    borderTopWidth: 2,
    width: 138,
    height: 2,
    position: "absolute",
  },
  text7: {
    left: 44,
  },
  view3: {
    left: 0,
  },
  text8: {
    left: 47,
  },
  pressable1: {
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

export default IPhone1441;
