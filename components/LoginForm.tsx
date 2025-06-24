import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const isFormValid = email.trim() !== "" && password.trim() !== "";
  const router = useRouter();

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/profile");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push("/profile");
      }
    } catch {
      setError("Fel användarnamn eller lösenord");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Logga in" : "Skapa konto"}</Text>

      <Text style={styles.label}>E-post</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        // React Native's TextInput använder onChangeText som direkt skickar in sträng-värdet från inputen
        // till skillnad från web React där du behöver extrahera strängen via event.target.value.
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Lösenord</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {!isLogin && (
        <>
          <Text style={styles.label}>Bekräfta lösenord</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </>
      )}

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>
          {isLogin ? "Logga in" : "Registrera"}
        </Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleTextWhite}>
          {isLogin ? "Har du inget konto?" : "Har du redan ett konto?"}
        </Text>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? "Registrera dig här" : "Logga in här"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 12,
    marginBottom: 30,
    color: "#FBCEB1",
    textAlign: "center",
  },
  label: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#FBCEB1",
  },
  input: {
    height: 50,
    fontSize: 58,
    borderWidth: 2,
    borderColor: "#FBCEB1",
    padding: 15,
    borderRadius: 12,
    color: "#FBCEB1",
    backgroundColor: "#2e2e2e",
    width: "105%",
    alignSelf: "center",
    marginLeft: "-2.5%",
  },
  button: {
    backgroundColor: "#FBCEB1",
    padding: 20,
    marginTop: 30,
    borderRadius: 16,
    alignItems: "center",
    width: "105%",
    alignSelf: "center",
    marginLeft: "-2.5%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  toggleText: {
    color: "#FBCEB1",
    fontSize: 10,
    paddingLeft: 10,
  },
  error: {
    marginTop: 15,
    color: "#FBCEB1",
    fontSize: 28,
    textAlign: "center",
  },
  toggleTextWhite: {
    color: "#FBCEB1",
    fontSize: 10,
  },
  disabledButton: {
    backgroundColor: "#FBCEB1",
    color: "#FBCEB1",
    padding: 20,
    borderRadius: 16,
    width: "105%",
    alignSelf: "center",
    marginLeft: "-2.5%",
  },
});
