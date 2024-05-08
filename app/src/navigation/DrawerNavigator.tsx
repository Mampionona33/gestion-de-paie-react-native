import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import StackNavigator from "./StackNavigator";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
