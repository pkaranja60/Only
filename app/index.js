import { StyleSheet, View } from "react-native";
import users from "../assests/data/users";
import UserCard from "../src/components/UserCard";
import { FlatList } from "react-native";
import FloatingButton from "../src/components/FloatingButton";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.floatingButtonContainer}>
        <FloatingButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
