import React from "react";
import { Image, View, StyleSheet, SafeAreaView, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  button: {
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    flexGrow: 1,
  },
});
export default ViewImageScreen;
