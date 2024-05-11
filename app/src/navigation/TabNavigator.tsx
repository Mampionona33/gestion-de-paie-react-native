import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import ListEmployeScreen from "../screens/ListEmployeScreen";
import MenuScreen from "../screens/MenuScreen";
import SCREEN_NAMES from "../constantes/screenName";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tab.Screen
        name={SCREEN_NAMES.LIST_EMPLOYEES_SCREEN}
        component={ListEmployeScreen}
      />
      <Tab.Screen name={SCREEN_NAMES.MENU_SCREEN} component={MenuScreen} />
    </Tab.Navigator>
  );
}
