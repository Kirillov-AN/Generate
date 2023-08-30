import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone14Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14Signup}>
      <View style={styles.continueWithGoogleButton}>
        <Image
          style={styles.buttonIcon}
          contentFit="cover"
          source={require("../assets/button.png")}
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
        onPress={() => navigation.navigate("IPhone14")}
      >
        <Image
          style={[styles.buttonIcon1, styles.logInLayout]}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>Зарегистрироваться</Text>
      </Pressable>
      <View style={[styles.delimiter, styles.delimiterLayout1]}>
        <Text style={[styles.text1, styles.textTypo1]}>или</Text>
        <View style={[styles.delimiterChild, styles.delimiterLayout]} />
        <View style={[styles.delimiterItem, styles.delimiterLayout]} />
      </View>
      <View style={[styles.logIn, styles.logInLayout]}>
        <View style={[styles.passwordEnterField, styles.enterLayout]}>
          <View style={[styles.passwordEnterFieldChild, styles.logInLayout]} />
          <Text style={[styles.password, styles.emailPosition]}>Пароль</Text>
          <Image
            style={styles.hide1Icon}
            contentFit="cover"
            source={require("../assets/hide-1.png")}
          />
        </View>
        <View style={[styles.emailEnterField, styles.enterLayout]}>
          <View style={[styles.passwordEnterFieldChild, styles.logInLayout]} />
          <Text style={[styles.email, styles.emailPosition]}>Email</Text>
        </View>
        <Pressable
          style={[styles.signInButton1, styles.signLayout]}
          onPress={() => navigation.navigate("IPhone142")}
        >
          <Image
            style={[styles.buttonIcon1, styles.logInLayout]}
            contentFit="cover"
            source={require("../assets/button1.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>Войдите</Text>
          <Text style={[styles.text3, styles.textTypo1]}>Забыли пароль?</Text>
        </Pressable>
      </View>
      <Text style={[styles.text4, styles.text4Typo]}>
        Ведите свой бюджет с умом
      </Text>
      <Text style={[styles.rhodea, styles.text4Typo]}>Rhodea</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
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
  logInLayout: {
    width: 348,
    position: "absolute",
  },
  textTypo: {
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.chivoMonoBold,
    fontWeight: "700",
    textAlign: "left",
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
    alignItems: "center",
    display: "flex",
    color: Color.dimgray,
    left: 23,
    top: 16,
    fontFamily: FontFamily.chivoMonoRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text4Typo: {
    fontFamily: FontFamily.chivoMonoRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  buttonIcon: {
    top: 12,
    left: 11,
    width: 349,
    height: 30,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  google: {
    left: 104,
    width: 192,
    height: 34,
    color: Color.black,
    fontFamily: FontFamily.chivoMonoMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 18,
  },
  googleIcon: {
    left: 32,
    width: 17,
    top: 18,
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
    top: -1,
    left: 6,
    height: 40,
    borderRadius: Border.br_11xl,
  },
  text: {
    left: 107,
    top: 11,
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.chivoMonoBold,
    fontWeight: "700",
  },
  signInButton: {
    top: 568,
    left: 15,
  },
  text1: {
    top: 0,
    left: 162,
    fontWeight: "300",
    fontFamily: FontFamily.chivoMonoLight,
    color: Color.darkgray,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  delimiterChild: {
    left: 0,
  },
  delimiterItem: {
    left: 200,
  },
  delimiter: {
    top: 483,
    left: 20,
    width: 353,
  },
  passwordEnterFieldChild: {
    top: 6,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_300,
    height: 38,
    left: 0,
  },
  password: {
    width: 77,
    height: 19,
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
    top: 45,
  },
  email: {
    width: 54,
    height: 18,
  },
  emailEnterField: {
    top: -6,
  },
  text2: {
    top: 10,
    left: 145,
  },
  text3: {
    top: 64,
    left: 120,
    color: Color.black,
    fontFamily: FontFamily.chivoMonoMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  signInButton1: {
    top: 111,
    left: -6,
  },
  logIn: {
    top: 261,
    left: 21,
    height: 96,
  },
  text4: {
    top: 175,
    left: 50,
    fontSize: FontSize.size_xl,
  },
  rhodea: {
    top: 74,
    left: 133,
    fontSize: FontSize.size_13xl,
  },
  iphone14Signup: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone14Signup;
