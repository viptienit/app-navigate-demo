import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import Header from "./Header/Header";
import BannerHome from "./BannerHome/BannerHome";

const Home = () => {
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={[styles.flex_1]}>
      <Header />
      <BannerHome />
    </Pressable>
  );
};
export default Home;

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    paddingTop: 50,
  },
});
