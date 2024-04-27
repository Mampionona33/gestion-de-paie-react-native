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
import authService, { ILogin } from "../services/auth.service";
import { useQuery } from "react-query";

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
  const [state, setState] = React.useState<ILogin>({ email: "", password: "" });
  const [submit, setSubmit] = React.useState<boolean>(false);

  const { isLoading, data, error, isError } = useQuery(
    "login",
    () => authService.login(state),
    {
      enabled: submit,
      onSuccess: (data: any) => {
        console.log(data);
      },
    }
  );

  if (isError) {
    console.log("error", error);
  }

  const handleSubmit = () => {
    if (state.email === "" || state.password === "") {
      return alert("Veuillez remplir tous les champs");
    }
    setSubmit(true);
    // navigation.navigate(SCREEN_NAMES.LIST_EMPLOYEES)
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <TouchableOpacity>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={state.email}
              onChangeText={(e) => setState({ ...state, email: e })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mot de passe</Text>
            <TextInput
              placeholder="Mot de passe"
              style={styles.input}
              value={state.password}
              secureTextEntry={true}
              onChangeText={(e) => setState({ ...state, password: e })}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleSubmit} />
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
