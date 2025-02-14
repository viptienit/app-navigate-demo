import { Image, Text, TextInput, View } from "react-native";
import styles from "./css";

const Header = () => {
  return (
    <View style={styles.header_container}>
      <View style={styles.header_items}>
        <Image style={styles.header_logo} source={require("./img/Logo.png")} />
        <View style={styles.header_item}>
          <View style={styles.search_block}>
            <TextInput style={styles.flex_1} />
            <View style={styles.btn_search}>
              <Image
                style={styles.icon_search}
                source={require("./img/icon-search.png")}
              />
            </View>
          </View>
          <View style={styles.cart_block}>
            <View style={styles.btn_cart}>
              <Image
                style={styles.icon_search}
                source={require("./img/icon-cart.png")}
              />
            </View>
            <Text>Cart (0)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Header;
