import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

// Importez le logo
const logo = require("../../assets/images/logo.png");

// Définissez les constantes pour les noms d'écrans
const SCREEN_NAMES = {
  LIST_EMPLOYEES: "List employés",
};

type LoginScreenProps = {
  navigation: NavigationProp<any>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREEN_NAMES.LIST_EMPLOYEES)}
          >
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mot de passe</Text>
            <TextInput placeholder="Mot de passe" style={styles.input} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="List employés"
              onPress={() => navigation.navigate(SCREEN_NAMES.LIST_EMPLOYEES)}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 40,
  },
  buttonContainer: {
    marginTop: 10,
  },
  logoContainer: {
    paddingTop: 50,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 75,
  },
});
