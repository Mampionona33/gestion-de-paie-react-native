import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListEmployeScreen from "../screens/ListEmployeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="List employés" component={ListEmployeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
