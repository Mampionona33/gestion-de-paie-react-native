import { Button, Text, View, StyleSheet } from "react-native";

interface IErrorFallbackProps {
  error: Error;
}

const ErrorFallback = (props: IErrorFallbackProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something happened!</Text>
      <Text style={styles.text}>{props.error.toString()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
  },
});

export default ErrorFallback;
