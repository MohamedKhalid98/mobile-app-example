import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Icon = ({
  name,
  size = 40,
  color = "#fff",
  backgroundColor = "#000",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        color,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
    </View>
  );
};

export default Icon;
