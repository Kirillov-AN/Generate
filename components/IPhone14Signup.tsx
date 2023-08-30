import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone14Signup11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Signup}>
      <View style={styles.continueWithGoogleButton}>
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button3.png")}
        />
        <Text style={[styles.google, styles.textTypo1]}>
          Продолжить с Google
        </Text>
        <Image
          style={[styles.googleIcon, styles.delimiterLayout1]}
          contentFit="cover"
          source={require("../assets/googleicon.png")}
        />
      </View>
      <Pressable
        style={[styles.signInButton, styles.signLayout]}
        onPress={() => navigation.navigate("IPhone14191")}
      >
        <Image
          style={styles.buttonIcon1}
          contentFit="cover"
          source={require("../assets/button4.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Зарегистрироваться</Text>
      </Pressable>
      <View style={[styles.delimiter, styles.delimiterLayout1]}>
        <Text style={[styles.text1, styles.textTypo1]}>или</Text>
        <View style={[styles.delimiterChild, styles.delimiterLayout]} />
        <View style={[styles.delimiterItem, styles.delimiterLayout]} />
      </View>
      <View style={styles.logIn}>
        <View style={[styles.passwordEnterField, styles.enterLayout]}>
          <View style={styles.enterChildShadowBox} />
          <Text style={[styles.password, styles.emailPosition]}>Пароль</Text>
          <Image
            style={styles.hide1Icon}
            contentFit="cover"
            source={require("../assets/hide-1.png")}
          />
        </View>
        <View style={[styles.emailEnterField, styles.enterLayout]}>
          <View style={styles.enterChildShadowBox} />
          <Text style={[styles.email, styles.emailPosition]}>Email</Text>
        </View>
        <Pressable
          style={[styles.signInButton1, styles.signLayout]}
          onPress={() => navigation.navigate("IPhone1423")}
        >
          <Image
            style={styles.buttonIcon1}
            contentFit="cover"
            source={require("../assets/button4.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>Войдите</Text>
          <Text style={[styles.text3, styles.textTypo1]}>Забыли пароль?</Text>
        </Pressable>
      </View>
      <Text style={[styles.text4, styles.textTypo1]}>
        Ведите свой бюджет с умом
      </Text>
      <Text style={[styles.rhodea, styles.textTypo1]}>Rhodea</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    position: "absolute",
  },
  delimiterLayout1: {
    height: 17,
    position: "absolute",
  },
  signLayout: {
    height: 39,
    width: 354,
    position: "absolute",
  },
  textTypo: {
    color: Color.whitesmoke_100,
    top: 11,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  delimiterLayout: {
    height: 1,
    width: 149,
    borderTopWidth: 1,
    borderColor: "rgba(147, 137, 137, 0.8)",
    borderStyle: "solid",
    top: 11,
    position: "absolute",
  },
  enterLayout: {
    height: 51,
    width: 372,
    left: 0,
    position: "absolute",
  },
  emailPosition: {
    height: 19,
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    left: 23,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  buttonIcon: {
    top: 9,
    left: 7,
    width: 357,
    height: 38,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  google: {
    left: 108,
    width: 156,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: 18,
  },
  googleIcon: {
    left: 32,
    width: 17,
    top: 18,
    height: 17,
    overflow: "hidden",
  },
  continueWithGoogleButton: {
    top: 508,
    left: 10,
    width: 362,
    height: 52,
    position: "absolute",
  },
  buttonIcon1: {
    top: -4,
    left: 2,
    width: 356,
    height: 48,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  text: {
    left: 107,
  },
  signInButton: {
    top: 568,
    left: 15,
  },
  text1: {
    top: 0,
    left: 162,
    fontWeight: "300",
    color: Color.darkgray,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  delimiterChild: {
    left: 0,
    width: 149,
    borderTopWidth: 1,
    borderColor: "rgba(147, 137, 137, 0.8)",
    borderStyle: "solid",
  },
  delimiterItem: {
    left: 200,
  },
  delimiter: {
    top: 483,
    left: 20,
    width: 353,
  },
  enterChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_8xs,
    top: 6,
    width: 348,
    left: 0,
    height: 38,
    position: "absolute",
  },
  password: {
    width: 77,
  },
  hide1Icon: {
    top: 17,
    left: 318,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  passwordEnterField: {
    top: 29,
  },
  email: {
    width: 35,
  },
  emailEnterField: {
    top: -22,
  },
  text2: {
    left: 150,
  },
  text3: {
    top: 66,
    left: 122,
    textDecoration: "underline",
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
    fontSize: FontSize.size_sm,
  },
  signInButton1: {
    top: 95,
    left: -6,
  },
  logIn: {
    top: 277,
    left: 21,
    height: 68,
    width: 348,
    position: "absolute",
  },
  text4: {
    top: 180,
    left: 57,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  rhodea: {
    top: 80,
    left: 136,
    fontSize: FontSize.size_13xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.helveticaNeue,
  },
  iphone14Signup: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone14Signup11;
