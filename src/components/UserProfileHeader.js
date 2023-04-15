import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, SimpleLineIcons, Feather, Entypo } from "@expo/vector-icons";

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed }) => {
  const router = useRouter();

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

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{marginEnd: 150}}>
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
                style={{
                  ...styles.profileText,
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                1.4K Posts · 304.8K Likes · 1.34M Fans
              </Text>
            </View>

            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
        </SafeAreaView>
      </ImageBackground>

      <View style={{ padding: 5, width: "100%" }}>
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

          {/* Header Buttons */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                borderWidth: 0.6,
                borderRadius: 50,
                borderColor: "gainsboro",
                padding: 13,
                marginEnd: 10,
              }}
            >
              <TouchableOpacity activeOpacity={0.3}>
                <Feather name="star" size={24} color="#00aff0" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignItems: "center",
                borderWidth: 0.6,
                borderRadius: 50,
                borderColor: "gainsboro",
                padding: 13,
              }}
            >
              <TouchableOpacity activeOpacity={0.3}>
                <SimpleLineIcons name="share-alt" size={24} color="#00aff0" />
              </TouchableOpacity>
            </View>
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

        {/* Subscribe Button */}
        <View style={{ alignItems: "center", width: "100%" }}>
          <TouchableOpacity
            activeOpacity={0.8}
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
          </TouchableOpacity>
        </View>
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
    borderWidth: 0.6,
    borderRadius: 50,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#00aff0",
    width: "100%",
    height: 55,
  },
  buttonText: {
    fontWeight: "600",
  },
});
