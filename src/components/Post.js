import { Image, StyleSheet, Text, View } from "react-native";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import HorizontalLine from "./HorizontalLine";

const Post = ({ post }) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <HorizontalLine />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Image
          src={post.User.avatar}
          style={{
            width: 50,
            aspectRatio: 1,
            borderRadius: 50,
            marginRight: 10,
          }}
        />

        <View>
          <Text style={{ fontSize: 15, fontWeight: "600", marginBottom: 2 }}>
            {post.User.name}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "gray" }}>
            @{post.User.handle}
          </Text>
        </View>

        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ marginRight: 15, color: "gray", fontSize: 12 }}>
            3 hours ago
          </Text>
          <Entypo name="dots-three-horizontal" size={24} color="gray" />
        </View>
      </View>

      <Text
        style={{ margin: 5, fontSize: 14, fontWeight: "300", lineHeight: 15 }}
      >
        {post.text}
      </Text>

      <Image src={post.image} style={{ width: "100%", aspectRatio: 1 }} />

      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="hearto"
            size={20}
            color="gray"
            style={{ marginRight: 15 }}
          />

          <MaterialCommunityIcons
            name="chat-outline"
            size={22}
            color="gray"
            style={{ marginRight: 14 }}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="pay-circle-o1"
              size={20}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <Text>SEND TIP</Text>
          </View>
        </View>

        <Ionicons name="bookmark-outline" size={22} color="gray" />
      </View>

      <Text style={{ fontWeight: "500", marginHorizontal: 10 }}>
        {post.likes} Likes
      </Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
