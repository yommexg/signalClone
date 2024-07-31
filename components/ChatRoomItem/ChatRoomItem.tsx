import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { router } from "expo-router";

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/(chatRoom)/${chatRoom.id}`)}
    >
      <View>
        <Image
          source={{
            uri: user.imageUri,
          }}
          style={styles.image}
        />
        {chatRoom.newMessage && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}> {chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.text} numberOfLines={1}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
