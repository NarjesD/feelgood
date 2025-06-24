import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Text, View } from "react-native";

export default function Landing() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.mainText}>VÄLKOMMEN!</Text>
      <View style={styles.box}>
        <Text style={styles.infoText}>
          🤯 Du har nu klivit in i den mest färgsprakande appen någonsin.
        </Text>
        <Text style={styles.infoText}>
          🌀 Här blandas känslor, färger och förvirring på hög nivå.
        </Text>
        <Text style={styles.infoText}>
          🔥 Klicka *inte* på något. Eller gör det. Vi vet inte.
        </Text>
        <Text style={styles.warningText}>
          ⚠️ Varning: du kan känna dig förvirrad efter denna skärm.
        </Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FF00", // neon-grön
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mainText: {
    fontSize: 72,
    color: "#FF00FF", // stark magenta
    fontWeight: "900",
    textTransform: "uppercase",
    textShadowColor: "#0000FF",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  box: {
    backgroundColor: "#FFFF00", // gul box
    borderWidth: 6,
    borderColor: "#FF0000", // röd ram
    padding: 15,
    width: "90%",
  },
  infoText: {
    fontSize: 18,
    color: "#0000FF",
    marginBottom: 10,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  warningText: {
    fontSize: 20,
    color: "#FF0000",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000",
    padding: 5,
  },
});
