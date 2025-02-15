import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./css";
import { globalStyles } from "@/utils/const";

const BannerHome = () => {
  return (
    <ImageBackground
      style={[styles.bg_banner_home]}
      source={require("./img/BannerHome.png")}
    >
      <View>
        <Text style={[globalStyles.fontYellowtail]}>100% Natural Food</Text>
        <Text>Choose the best healthier way of life</Text>
        <Pressable>
          <Text>Explore Now</Text>
          <Image source={require("./img/Arrow-banner-home.png")} />
        </Pressable>
      </View>
    </ImageBackground>
  );
};
export default BannerHome;
