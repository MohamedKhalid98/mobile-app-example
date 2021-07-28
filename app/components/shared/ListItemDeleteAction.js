import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={40}
        color="white"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: colors.danger,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ListItemDeleteAction;
