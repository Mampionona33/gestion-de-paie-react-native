import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import ListEmployeScreen from "../screens/ListEmployeScreen";
import MenuScreen from "../screens/MenuScreen";

const Tab = createBottomTabNavigator();

export default function TabNavitator() {
  return (
    <Tab.Navigator
      initialRouteName="ListEmploye"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="ListEmployeScreen"
        component={ListEmployeScreen}
        options={{ title: "List Employé" }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ title: "Menu" }}
      />
    </Tab.Navigator>
  );
}
