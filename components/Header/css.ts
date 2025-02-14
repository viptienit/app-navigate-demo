import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header_container: {
    width: "100%",
    maxWidth: 1920,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  header_items: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 1600,
  },
  header_logo: {
    width: 200,
    height: 54,
  },
  header_item: {
    width: 556,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search_block: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(239, 246, 241, 1)",
    padding: 5,
    width: 376,
  },
  cart_block: {
    flexDirection: "row",
    padding: 5,
    paddingRight: 25,
    width: 160,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  flex_1: {
    flex: 1,
  },
  btn_search: {
    padding: 18,
    borderRadius: "50%",
    backgroundColor: "#7EB693",
  },
  btn_cart: {
    padding: 18,
    marginRight: 14,
    borderRadius: "50%",
    backgroundColor: "#274C5B",
  },
  icon_search: {
    width: 21,
    height: 21,
  },
});
export default styles;
