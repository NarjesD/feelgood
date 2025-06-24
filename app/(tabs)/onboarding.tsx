import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Text, View } from "react-native";

export default function Landing() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>välKoMMEN?</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          feelgood hjälper dig att må bra
        </Text>
        <Text style={styles.infoText}>
          sätta Mål? Kanske. Tips? 😵
        </Text>
        <Text style={styles.infoText}>
         börja här
        </Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "#00FF00", 
  },
  title: {
    color: "#FF00FF", 
    fontSize: 12, 
    fontWeight: "normal",
    marginTop: 10,
    marginBottom: 2,
    textTransform: "uppercase",
  },
  infoContainer: {
    marginTop: 5,
    width: "100%",
    backgroundColor: "#FFFF00", 
    padding: 2,
  },
  infoText: {
    color: "#0000FF", 
    fontSize: 9, 
    textAlign: "left",
    marginVertical: 1,
    fontStyle: "italic",
  },
});
