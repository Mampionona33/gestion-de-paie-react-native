import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListEmployeScreen from "../screens/ListEmployeScreen";
import LoginScreen from "../screens/LoginScreen";
import { useAppSelector } from "../hooks/useReduxHooks";

const Stack = createStackNavigator();

function AppNavigator() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="List employés" component={ListEmployeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
