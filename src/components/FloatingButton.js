import { Link } from "expo-router";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import the desired icon library

const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <Link href={"/newPost"} asChild>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Icon name="add-sharp" size={40} color="#fff" />
          {/* Use the desired icon */}
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    right: 10,
  },
  button: {
    backgroundColor: "#00aff0",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2, // Add elevation for shadow effect (Android only)
    shadowColor: "#000", // Add shadow color (iOS only)
    shadowOpacity: 0.3, // Add shadow opacity (iOS only)
    shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS only)
  },
});

export default FloatingButton;
