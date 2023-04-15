import { useRouter, useSearchParams } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import users from "../../assests/data/users";

const ProfilePage = () => {
  const router = useRouter();
  const { id } = useSearchParams();

  const user = users.find((u) => u.id == id);

  if (!user) {
    return <Text>User not found!</Text>;
  }

  return (
    <View>
      <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
        <View style={styles.overlay} />

        <SafeAreaView
          style={{
            marginHorizontal: 10,
            marginVertical: 45,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back"
            size={28}
            color="white"
            style={{ marginEnd: 10 }}
          />

          <View>
            <Text
              style={{
                ...styles.profileText,
                marginBottom: 5,
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              {user.name}
            </Text>
            <Text
              style={{ ...styles.profileText, fontSize: 12, fontWeight: "500" }}
            >
              1.4K Posts · 304.8K Likes · 1.34M Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  cover: {
    width: "100%",
    height: 250,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    ...StyleSheet.absoluteFillObject,
  },
  profileText: {
    color: "white",
  },
});
