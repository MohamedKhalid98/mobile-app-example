import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./app/components/shared/Card";
import Icon from "./app/components/shared/Icon";
import ListItem from "./app/components/shared/ListItem";
import SafeScreen from "./app/components/shared/SafeScreen";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});
