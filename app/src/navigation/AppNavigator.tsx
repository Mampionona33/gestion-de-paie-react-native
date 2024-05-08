import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { useAppSelector } from "../hooks/useReduxHooks";
import TabNavitator from "./TabNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./DrawerNavigator";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

function AppNavigator() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
