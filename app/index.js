import { StyleSheet, View } from "react-native";
import users from "../assests/data/users";
import UserCard from "../src/components/UserCard";
import { FlatList } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
});
