import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { useAppSelector } from "../hooks/useReduxHooks";
import TabNavitator from "./TabNavitator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

function AppNavigator() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <>
          <DrawerNavigator />
        </>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;
