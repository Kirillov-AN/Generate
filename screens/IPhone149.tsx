import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone149 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <View style={styles.viewPosition}>
        <View style={[styles.view1, styles.viewPosition]} />
        <Text style={styles.text}>Новая операция</Text>
        <Pressable
          style={styles.parent}
          onPress={() => navigation.navigate("IPhone145")}
        >
          <View style={[styles.view2, styles.view2Layout]}>
            <View style={[styles.child, styles.view2Layout]} />
            <Text style={[styles.text1, styles.textTypo]}>Расход</Text>
          </View>
          <Pressable
            style={[styles.pressable, styles.view2Layout]}
            onPress={() => navigation.navigate("IPhone149")}
          >
            <View style={[styles.child, styles.view2Layout]} />
            <Image
              style={[styles.inner, styles.view2Layout]}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>Доход</Text>
          </Pressable>
        </Pressable>
      </View>
      <View style={styles.manuallyAdd}>
        <View style={styles.manuallyAddChild} />
        <Image
          style={styles.noteAdd1Icon}
          contentFit="cover"
          source={require("../assets/note-add-1.png")}
        />
        <Text style={styles.text3}>{`Ввести данные
вручную`}</Text>
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    height: 119,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  view2Layout: {
    width: 136,
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
  view1: {
    backgroundColor: Color.white,
  },
  text: {
    top: 52,
    left: 115,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  child: {
    height: 28,
    backgroundColor: Color.white,
    left: 0,
    width: 136,
    top: 0,
  },
  text1: {
    left: 44,
  },
  view2: {
    height: 28,
    left: 0,
    width: 136,
    top: 0,
  },
  inner: {
    top: 26,
    height: 2,
    left: 0,
    width: 136,
  },
  text2: {
    left: 47,
  },
  pressable: {
    left: 136,
    height: 28,
    top: 0,
  },
  parent: {
    top: 91,
    left: 59,
    width: 272,
    height: 28,
    position: "absolute",
  },
  manuallyAddChild: {
    height: "73.39%",
    top: "0%",
    right: "0%",
    bottom: "26.61%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  noteAdd1Icon: {
    top: 13,
    left: 13,
    width: 54,
    height: 54,
    overflow: "hidden",
    position: "absolute",
  },
  text3: {
    top: 85,
    left: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  manuallyAdd: {
    top: 163,
    left: 43,
    width: 80,
    height: 109,
    position: "absolute",
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
    height: 845,
    width: "100%",
  },
});

export default IPhone149;
