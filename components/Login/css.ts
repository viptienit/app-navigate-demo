import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
  },

  containe: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  },
  row: {
    flexDirection: "row",
  },
  between: {
    justifyContent: "space-between",
  },
  mg_t_20: {
    marginTop: 20,
  },
  mg_t_10: {
    marginTop: 10,
  },
  mg_t_5: {
    marginTop: 5,
  },
  mr_10: {
    marginRight: 10,
  },
});
export default styles;
