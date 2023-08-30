import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone14211 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={[styles.qrCodeScan, styles.coffee3Layout]}>
        <View style={[styles.qrCodeScanChild, styles.viewShadowBox1]} />
        <Image
          style={[styles.qrCodeScanner1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/qr-code-scanner-1.png")}
        />
        <Text style={[styles.qr, styles.textTypo10]}>{`Сканировать 
QR с чека`}</Text>
      </View>
      <View style={[styles.manuallyAdd, styles.coffee3Layout]}>
        <View style={styles.coffeeItemPosition} />
        <Image
          style={[styles.qrCodeScanner1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/note-add-1.png")}
        />
        <Text style={styles.text}>{`Ввести данные
вручную`}</Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.text1, styles.textClr1]}>Избранное</Text>
        <Text style={[styles.text2, styles.textClr]}>изменить</Text>
        <View style={[styles.coffee, styles.coffeePosition]}>
          <View style={styles.coffeeItemPosition} />
          <Text style={[styles.text3, styles.textTypo10]}>Кофе</Text>
          <Image
            style={[styles.localCafe1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/local-cafe-12.png")}
          />
        </View>
        <View style={[styles.coffee1, styles.coffeePosition]}>
          <View style={styles.coffeeItemPosition} />
          <Text style={[styles.text4, styles.textTypo10]}>Автомойка</Text>
          <Image
            style={[styles.localCafe1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/local-car-wash-12.png")}
          />
        </View>
        <View style={[styles.directionsSubway2, styles.menu1Layout]} />
        <View style={[styles.subway, styles.coffeePosition]}>
          <View style={styles.coffeeItemPosition} />
          <Text style={[styles.text5, styles.textTypo10]}>АЗС</Text>
          <Image
            style={[styles.localCafe1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/local-gas-station-12.png")}
          />
        </View>
      </View>
      <View style={[styles.coffee2, styles.coffee2Position]}>
        <View style={styles.coffeeItemPosition} />
        <Text style={[styles.text6, styles.textTypo10]}>Платная парковка</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/local-parking-1.png")}
        />
      </View>
      <View style={[styles.coffee3, styles.coffee3Layout]}>
        <View style={styles.coffeeItemPosition} />
        <Text style={[styles.text7, styles.textTypo10]}>Такси</Text>
        <Image
          style={[styles.localCafe1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/local-taxi-1.png")}
        />
      </View>
      <View style={[styles.subway1, styles.coffee2Position]}>
        <View style={styles.coffeeItemPosition} />
        <Text style={[styles.text8, styles.textTypo10]}>Проезд в метро</Text>
        <Image
          style={[styles.qrCodeScanner1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/directions-subway-3.png")}
        />
      </View>
      <View style={[styles.view1, styles.itemLayout1]}>
        <Text style={[styles.text1, styles.textClr1]}>Частые траты</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout3]}>
        <View style={[styles.view3, styles.viewLayout3]} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("IPhone1423")}
        >
          <Image
            style={[styles.statistics1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/statistics-1.png")}
          />
          <Text style={[styles.text10, styles.textTypo9]}>Сводка</Text>
        </Pressable>
        <View style={styles.button1}>
          <Text style={[styles.text11, styles.textClr]}>{`Новая
операция`}</Text>
          <Image
            style={styles.addCircle1Icon}
            contentFit="cover"
            source={require("../assets/add-circle-1.png")}
          />
        </View>
        <View style={styles.button2}>
          <Text style={[styles.text12, styles.textTypo9]}>Счета</Text>
          <Image
            style={[styles.walletsIcon, styles.frameIconLayout1]}
            contentFit="cover"
            source={require("../assets/wallets.png")}
          />
        </View>
        <View style={[styles.button3, styles.buttonPosition1]}>
          <Text style={[styles.text13, styles.textTypo9]}>Контакты</Text>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout1]}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
        <View style={[styles.button4, styles.buttonPosition1]}>
          <Text style={[styles.text14, styles.textTypo9]}>Долги</Text>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout1]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={styles.viewPosition1}>
        <View style={[styles.view5, styles.viewPosition1]} />
        <Text style={[styles.text15, styles.menu1Position]}>
          Новая операция
        </Text>
        <Pressable
          style={[styles.menu1, styles.menu1Position]}
          onPress={() => navigation.navigate("IPhone1422")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/menu-1.png")}
          />
        </Pressable>
        <View style={[styles.view6, styles.viewLayout2]}>
          <View style={[styles.child, styles.childLayout]} />
          <View style={[styles.item, styles.itemLayout1]} />
          <Text style={[styles.text16, styles.textTypo8]}>Списание</Text>
        </View>
        <View style={[styles.view7, styles.viewLayout2]}>
          <Pressable
            style={[styles.inner, styles.childLayout]}
            onPress={() => navigation.navigate("IPhone1420")}
          />
          <Text style={[styles.text17, styles.textTypo8]}>Начисление</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coffee3Layout: {
    height: 80,
    width: 80,
    position: "absolute",
  },
  viewShadowBox1: {
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
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textTypo10: {
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  textClr1: {
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  textClr: {
    color: Color.salmon,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  coffeePosition: {
    top: 49,
    height: 80,
    width: 80,
    position: "absolute",
  },
  menu1Layout: {
    height: 24,
    width: 24,
  },
  coffee2Position: {
    top: 530,
    height: 80,
    width: 80,
    position: "absolute",
  },
  itemLayout1: {
    width: 167,
    position: "absolute",
  },
  viewLayout3: {
    height: 105,
    width: 390,
    left: 0,
    position: "absolute",
  },
  textTypo9: {
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameIconLayout1: {
    height: 32,
    width: 32,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  buttonPosition1: {
    top: 11,
    position: "absolute",
  },
  viewPosition1: {
    height: 119,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  menu1Position: {
    top: 52,
    position: "absolute",
  },
  viewLayout2: {
    height: 19,
    position: "absolute",
  },
  childLayout: {
    height: 28,
    width: 164,
    top: -5,
    backgroundColor: Color.white,
    position: "absolute",
  },
  textTypo8: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    left: 0,
    position: "absolute",
  },
  qrCodeScanChild: {
    borderRadius: Border.br_3xs,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 80,
    width: 80,
    position: "absolute",
  },
  qrCodeScanner1Icon: {
    width: 54,
    height: 54,
    left: 13,
    top: 13,
  },
  qr: {
    left: 7,
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 85,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  qrCodeScan: {
    left: 235,
    top: 161,
    width: 80,
  },
  coffeeItemPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  text: {
    left: 4,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_3xs,
    top: 85,
    position: "absolute",
  },
  manuallyAdd: {
    left: 70,
    top: 161,
    width: 80,
  },
  text1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
    left: 278,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    top: 13,
  },
  text3: {
    left: 26,
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 85,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  localCafe1Icon: {
    top: 18,
    left: 18,
    width: 44,
    height: 44,
  },
  coffee: {
    left: 128,
  },
  text4: {
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 85,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
    left: 13,
  },
  coffee1: {
    left: 256,
  },
  directionsSubway2: {
    top: 225,
    left: 46,
    overflow: "hidden",
    position: "absolute",
  },
  text5: {
    top: 86,
    left: 29,
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  subway: {
    left: 0,
  },
  view: {
    top: 294,
    width: 336,
    height: 163,
    left: 27,
    position: "absolute",
  },
  text6: {
    left: -4,
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 85,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  coffee2: {
    left: 155,
  },
  text7: {
    left: 25,
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 85,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  coffee3: {
    top: 529,
    left: 283,
  },
  text8: {
    left: 2,
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    top: 85,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  subway1: {
    left: 27,
  },
  view1: {
    top: 479,
    height: 29,
    left: 27,
  },
  view3: {
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
  statistics1Icon: {
    left: 5,
    width: 26,
    height: 26,
    top: 0,
  },
  text10: {
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
  text11: {
    top: 35,
    left: 1,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  addCircle1Icon: {
    width: 40,
    height: 40,
    top: -5,
    left: 4,
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
  text12: {
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
  text13: {
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
  text14: {
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
  view5: {
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
  text15: {
    left: 115,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  menu1: {
    left: 19,
    height: 24,
    width: 24,
  },
  child: {
    left: -45,
  },
  item: {
    top: 22,
    left: -46,
    borderStyle: "solid",
    borderColor: "#e96757",
    borderTopWidth: 3,
    height: 3,
  },
  text16: {
    top: -4,
  },
  view6: {
    top: 96,
    left: 76,
    width: 74,
  },
  inner: {
    left: -34,
  },
  text17: {
    top: 0,
  },
  view7: {
    top: 92,
    left: 229,
    width: 91,
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 1006,
    width: "100%",
  },
});

export default IPhone14211;
