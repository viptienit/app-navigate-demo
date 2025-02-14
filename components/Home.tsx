import { StyleSheet, Text, View } from "react-native";
import Header from "./Header/Header";

const Home = () => {
  return (
    <View style={[styles.flex_1]}>
      <Header />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    paddingTop: 50,
  },
});
