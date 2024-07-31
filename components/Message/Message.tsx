import { StyleSheet, Text, View } from "react-native";
import React from "react";

const myID = "u1";

const Message = ({ message }) => {
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },

  leftContainer: {
    backgroundColor: "#3777f0",
    marginLeft: 10,
    marginRight: "auto",
  },

  rightContainer: {
    backgroundColor: "lightgrey",
    marginLeft: "auto",
    marginRight: 10,
  },
});
