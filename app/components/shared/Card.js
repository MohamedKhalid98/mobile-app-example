import React from "react";
import { View, Image, StyleSheet, SafeAreaView, Text } from "react-native";
import colors from "../../config/colors";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    display: "flex",
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  cardBody: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  cardSubTitle: {
    fontSize: 17,
    color: colors.secondary,
    paddingVertical: 7,
  },
});
export default Card;
