import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import DrawerContent from "../components/DrawerContent";
import SCREEN_NAMES from "../constantes/screenName";
import ListeEmployeScreenStack from "../stack/ListeEmployeScreenStack";
import MenuScreenStack from "../stack/MenuScreenStack";
import { useRoute } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }: any) {
  const route = useRoute();
  console.log("route", route);

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name={SCREEN_NAMES.LIST_EMPLOYEES_SCREEN}
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
}
