import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../components/shared/Icon";
import ListItem from "../components/shared/ListItem";
import SafeScreen from "../components/shared/SafeScreen";
import colors from "../config/colors";
const menuItems = [
  {
    id: "1",
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    id: "2",
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
const AccountScreen = () => {
  return (
    <SafeScreen style={styles.container}>
      <View style={styles.section}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh"
          subTitle="programmingwithmosh@gmail.com"
        />
      </View>
      <View style={styles.section}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.section}>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

export default AccountScreen;
