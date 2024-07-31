import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Message from "@/components/Message";
import Chats from "@/assets/dummy-data/Chats";
import MessageInput from "@/components/MessageInput";
import { router, Stack, useLocalSearchParams } from "expo-router";

export default function ChatRoom() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.page}>
      <Stack.Screen
        options={{
          title: "Yommex",
        }}
      />
      <FlatList
        data={Chats.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
