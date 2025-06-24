import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Text } from "react-native";

export default function Profile() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}>HEJSAN VÄlKOMMEN TILL PROFIL</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FF69B4",
    padding: 0,
    margin: 0,
  },
  text: {
    color: "#FFFF00",
    fontSize: 96,
    fontWeight: "900",
    fontStyle: "italic",
    textTransform: "uppercase",
    letterSpacing: 10,
    lineHeight: 120,
    marginTop: 5,
    marginLeft: 2,
    textAlign: "right",
  },
});
