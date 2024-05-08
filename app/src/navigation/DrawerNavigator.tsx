import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import ListEmployeScreen from "../screens/ListEmployeScreen";
import MenuScreen from "../screens/MenuScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Liste Employe">
      <Drawer.Screen
        name="ListEmploye"
        component={ListEmployeScreen}
        options={{ title: "Liste Employé" }}
      />
      <Drawer.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ title: "Menu" }}
      />
    </Drawer.Navigator>
  );
}
