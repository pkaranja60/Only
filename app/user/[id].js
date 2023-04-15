import { useState } from "react";
import { useSearchParams } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import users from "../../assests/data/users";
import posts from "../../assests/data/posts";
import UserProfileHeader from "../../src/components/UserProfileHeader";
import Post from "../../src/components/Post";

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useSearchParams();

  const user = users.find((u) => u.id == id);

  if (!isSubscribed) {
    return (
      <View style={{ flex: 1 }}>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />

        <View style={{ backgroundColor: "whitesmoke", alignItems: "center" }}>
          <FontAwesome5 name="lock" size={55} color="gainsboro" />

          <View style={{ width: "100%" , alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Text
                style={{
                  color: "#fefefe",
                  lineHeight: 20,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                SUBSCRIBE TO SEE USER'S POSTS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <UserProfileHeader
            user={user}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
          />
        )}
      />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00aff0",
    padding: 15,
    width: "95%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
