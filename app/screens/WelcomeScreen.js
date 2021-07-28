import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
} from "react-native";
import AppButton from "../components/shared/AppButton";
import SafeScreen from "../components/shared/SafeScreen";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      blurRadius={6}
      style={styles.image}>
      <SafeScreen style={{ flex: 1, width: "100%" }}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" color="primary" />
          <AppButton title="Register" color="secondary" />
        </View>
      </SafeScreen>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    marginTop: "auto",
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
