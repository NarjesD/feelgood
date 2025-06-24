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
    padding: 5,
  },
  title: {
    fontSize: 8,
    marginBottom: 80,
    color: "#f0f0f0",
    textAlign: "left",
  },
  label: {
    fontSize: 36,
    marginTop: 4,
    marginBottom: 40,
    color: "#4b4b4b",
  },
  input: {
    height: 60,
    fontSize: 10,
    borderWidth: 6,
    borderColor: "limegreen",
    padding: 10,
    borderRadius: 4,
    color: "#FFFFFF",
    backgroundColor: "#FBCEB1",
    width: "110%",
    alignSelf: "flex-end",
    marginLeft: "25%",
  },
  button: {
    backgroundColor: "black",
    padding: 8,
    marginTop: 8,
    borderRadius: 0,
    alignItems: "flex-start",
    width: "55%",
    alignSelf: "flex-start",
    marginLeft: "25%",
  },
  buttonText: {
    color: "#FBCEB1",
    fontSize: 8,
    fontWeight: "normal",
  },
  toggleContainer: {
    flexDirection: "column",
    marginTop: 5,
    justifyContent: "flex-start",
  },
  toggleText: {
    color: "darkgrey",
    fontSize: 8,
    paddingLeft: 45,
  },
  error: {
    marginTop: 80,
    color: "#3e3e3e",
    fontSize: 12,
    textAlign: "left",
  },
  toggleTextWhite: {
    color: "#FFFFFF",
    fontSize: 6,
  },
  disabledButton: {
    backgroundColor: "#ffffff",
    color: "#ffffff",
    padding: 40,
    borderRadius: 0,
    width: "180%",
    alignSelf: "center",
    marginLeft: "-40%",
  },
});
