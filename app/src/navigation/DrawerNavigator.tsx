import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import StackNavigator from "./StackNavigator";
import DrawerContent from "../components/DrawerContent";
import SCREEN_NAMES from "../constantes/screenName";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name={SCREEN_NAMES.LIST_EMPLOYEES_SCREEN_STACK}
        component={StackNavigator}
        options={{ title: "Liste Employé", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
