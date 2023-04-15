import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { Ionicons, SimpleLineIcons, Feather } from "@expo/vector-icons";

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed }) => {
  const router = useRouter();

  if (!user) {
    return <Text>User not found!</Text>;
  }

  return (
    <View>
      {/* Image Cover */}

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

      <View style={{ padding: 10 }}>
        {/* Profile Image */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: 10,
            marginTop: -50,
          }}
        >
          <Image src={user.avatar} style={styles.userImage} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather
              name="star"
              size={20}
              color="black"
              style={{
                marginRight: 20,
                borderWidth: 1,
                borderColor: "gainsboro",
                borderRadius: 50,
                padding: 15,
                alignItems: 'center'
              }}
            />
            <SimpleLineIcons name="share-alt" size={24} color="#00aff0" />
          </View>
        </View>

        <Text style={{ fontSize: 23, fontWeight: "600", marginVertical: 3 }}>
          {user.name}
        </Text>
        <Text style={{ color: "gray", marginBottom: 10 }}>@{user.handle}</Text>
        <Text style={{ lineHeight: 20 }}>{user.bio}</Text>

        <Text style={{ color: "gray", marginTop: 20, fontWeight: "600" }}>
          SUBSCRIPTION
        </Text>

        <Pressable
          onPress={() => setIsSubscribed(!isSubscribed)}
          style={[
            styles.button,
            { backgroundColor: isSubscribed ? "white" : "#00aff0" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "#00aff0" : "white" },
            ]}
          >
            {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
          </Text>
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "#00aff0" : "white" },
            ]}
          >
            {user.subscriptionPrice == 0
              ? "FOR FREE"
              : `$${user.subscriptionPrice} / month`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserProfileHeader;

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
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
    marginRight: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gainsboro",
    borderWidth: 1,
    height: 50,
    borderRadius: 50,
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "600",
  },
});
