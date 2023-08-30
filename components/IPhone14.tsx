import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone14181 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14}>
      <Image
        style={styles.letter1Icon}
        contentFit="cover"
        source={require("../assets/letter-11.png")}
      />
      <Text style={[styles.text, styles.textTypo3]}>{`Подтвердите свою почту
для завершения
регистрации`}</Text>
      <Pressable
        style={styles.signInButton}
        onPress={() => navigation.navigate("IPhone14Signup11")}
      >
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button5.png")}
        />
        <Text style={[styles.text1, styles.textTypo3]}>Вернуться к входу</Text>
        <View style={styles.arrowForward1} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo3: {
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  letter1Icon: {
    top: 191,
    left: 136,
    width: 118,
    height: 109,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 341,
    left: 54,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "center",
  },
  buttonIcon: {
    top: -4,
    left: 2,
    borderRadius: Border.br_11xl,
    width: 356,
    height: 48,
    position: "absolute",
  },
  text1: {
    top: 11,
    left: 116,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    color: Color.whitesmoke_100,
    textAlign: "left",
  },
  arrowForward1: {
    top: 7,
    left: 256,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
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
    top: 469,
    left: 18,
    width: 354,
    height: 39,
    position: "absolute",
  },
  iphone14: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone14181;
