import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const AppButton = ({ title, color, children }) => {
  return (
    <View style={[styles.view, { backgroundColor: colors[color] }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 60,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
export default AppButton;
