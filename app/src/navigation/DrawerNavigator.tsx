import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import ListEmployeScreen from "../screens/ListEmployeScreen";
import MenuScreen from "../screens/MenuScreen";
import TabNavitator from "./TabNavitator";
import Icon from "react-native-vector-icons/Entypo";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Liste Employe">
      <Drawer.Screen
        name="TabNavitator"
        component={TabNavitator}
        options={{
          title: "Liste Employé",
          drawerIcon: () => <Icon name="list" size={25} />,
        }}
      />
      <Drawer.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ title: "Menu" }}
      />
    </Drawer.Navigator>
  );
}
