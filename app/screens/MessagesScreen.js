import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/shared/ListItem";
import ListItemSeperator from "../components/shared/ListItemSeperator";
import SafeScreen from "../components/shared/SafeScreen";

const initialMessages = [
  {
    id: "1",
    image: require("../assets/mosh.jpg"),
    title: "Mosh",
    description: "Hello World",
  },
  {
    id: "2",
    image: require("../assets/mosh.jpg"),
    title: "Mosh",
    description: "Hello World",
  },
  {
    id: "3",
    image: require("../assets/mosh.jpg"),
    title: "Mosh",
    description: "Hello World",
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = React.useState(initialMessages);
  const [refreshing, setRefreshing] = React.useState(false);
  return (
    <SafeScreen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log(item.description)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: "3",
              image: require("../assets/mosh.jpg"),
              title: "Mosh",
              description: "Hello World",
            },
          ]);
        }}
      />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
});
export default MessagesScreen;
