import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";

export default function UserCard({ user }) {
  return (
    <ImageBackground source={{ uri: user.coverImage }} style={styles.userCard}>
      {/* Overlay */}

      <View style={styles.overlay} />
      {/* Image */}

      <Image src={user.avatar} style={styles.userImage} />

      {/* Name & handle */}
      <View>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
          {user.name}{" "}
        </Text>
        <Text style={{ color: "white", fontSize: 14, fontWeight: "400" }}>
          @{user.handle}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  userCard: {
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    // position: "absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
    marginRight: 20,
  },
});
