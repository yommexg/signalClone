import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },

  badgeContainer: {
    backgroundColor: "#3872e9",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    position: "absolute",
    right: 5,
    top: -2,
  },

  badgeText: {
    color: "white",
    fontSize: 12,
  },

  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },

  text: {
    fontSize: 14,
    color: "grey",
  },
});

export default styles;
