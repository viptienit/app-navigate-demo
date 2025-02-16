import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header_container: {
    width: "100%",
    maxWidth: 1920,
    flexShrink: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header_items: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 1,
    maxWidth: 1600,
    gap: 5,
  },
  header_logo: {
    width: 110,
    height: 30,
  },
  header_item: {
    maxWidth: 500,
    flexShrink: 1,
    width: "100%",
    flexDirection: "row",
  },
  search_block: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(239, 246, 241, 1)",
    padding: 5,
    paddingLeft: 10,
    borderRadius: 36,
    width: "100%",
    maxWidth: 140,
    flexShrink: 1,
    marginRight: 5,
  },
  cart_block: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 36,
    padding: 5,
    paddingRight: 15,
    width: "100%",
    maxWidth: 120,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flexShrink: 1,
  },
  flex_1: {
    flex: 1,
  },
  btn_search: {
    padding: 13,
    borderRadius: "50%",
    backgroundColor: "#7EB693",
  },
  btn_cart: {
    padding: 13,
    marginRight: 13,
    borderRadius: "50%",
    backgroundColor: "#274C5B",
  },
  icon_search: {
    width: 13,
    height: 13,
  },
});
export default styles;
