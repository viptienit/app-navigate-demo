import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./css";
import { globalStyles } from "@/utils/globalStyles";

const Header = () => {
  return (
    <View style={styles.header_container}>
      <View style={styles.header_items}>
        <Image style={styles.header_logo} source={require("./img/Logo.png")} />
        <View style={styles.header_item}>
          <View style={styles.search_block}>
            <TextInput numberOfLines={1} style={styles.flex_1} />
            <TouchableOpacity style={styles.btn_search}>
              <Image
                style={styles.icon_search}
                source={require("./img/icon-search.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cart_block}>
            <TouchableOpacity style={styles.btn_cart}>
              <Image
                style={styles.icon_search}
                source={require("./img/icon-cart.png")}
              />
            </TouchableOpacity>
            <Text style={[globalStyles.fontRoboto]}>Cart (0)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Header;
