import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = () => {
  return <View style={styles.horizontalLine} />;
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomWidth: 0.5,
    borderColor: "gainsboro",
    marginVertical: 5,
  },
});

export default HorizontalLine;
