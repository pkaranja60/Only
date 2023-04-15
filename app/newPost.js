import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";

const NewPost = () => {
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 10,
        marginVertical: 45,
      }}
    >
      <TextInput style={styles.textInput} />
    </SafeAreaView>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
  },
});
