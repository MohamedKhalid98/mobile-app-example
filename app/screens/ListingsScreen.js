import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SafeScreen from "../components/shared/SafeScreen";
import Card from "../components/shared/Card";
import colors from "../config/colors";

const ListingsScreen = () => {
  const items = [
    {
      id: "1",
      image: require("../assets/jacket.jpg"),
      title: "Jacket",
      price: "100",
    },
    {
      id: "2",
      image: require("../assets/couch.jpg"),
      title: "Coach",
      price: "490",
    },
    {
      id: "3",
      image: require("../assets/couch.jpg"),
      title: "Coach",
      price: "490",
    },
    {
      id: "4",
      image: require("../assets/couch.jpg"),
      title: "Coach",
      price: "490",
    },
    {
      id: "5",
      image: require("../assets/couch.jpg"),
      title: "Coach",
      price: "490",
    },
    {
      id: "6",
      image: require("../assets/couch.jpg"),
      title: "Coach",
      price: "490",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={`$${item.price}`}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    paddingTop: 70,
  },
});
export default ListingsScreen;
