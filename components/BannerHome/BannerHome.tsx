import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./css";
import { globalStyles } from "@/utils/globalStyles";

const BannerHome = () => {
  return (
    <ImageBackground
      style={[styles.bg_banner_home]}
      source={require("./img/BannerHome.png")}
    >
      <View style={styles.ml_30}>
        <Text style={[globalStyles.fontYellowtail, styles.text]}>
          100% Natural Food
        </Text>
        <Text style={[globalStyles.fontRoboto, styles.title]}>
          Choose the best healthier way {"\n"}of life
        </Text>
        <TouchableOpacity style={[styles.button]}>
          <Text style={[globalStyles.fontRoboto, styles.bt_txt]}>
            Explore Now
          </Text>
          <Image
            style={styles.img}
            source={require("./img/Arrow-banner-home.png")}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default BannerHome;
