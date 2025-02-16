import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  bg_banner_home: {
    width: "100%",
    paddingVertical: 60,
  },
  text: {
    color: "#68A47F",
  },
  title: {
    color: "#274C5B",
    fontSize: 24,
    fontWeight: 700,
    width: "100%",
    maxWidth: 190,
    flexShrink: 1,
  },
  button: {
    backgroundColor: "#EFD372",
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 5,
    alignSelf: "flex-start",
  },
  bt_txt: {
    color: "#274C5B",
    fontSize: 12,
    marginRight: 5,
    fontWeight: 700,
  },
  img: {
    width: 12,
    height: 12,
  },
  ml_30: {
    marginLeft: 30,
  },
});
export default styles;
