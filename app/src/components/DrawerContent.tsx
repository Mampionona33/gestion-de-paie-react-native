import React from "react";
import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import SCREEN_NAMES from "../constantes/screenName";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface DrawerListProps {
  icon?: string;
  label: string;
  navigateTo: string;
}

const DrawerList: DrawerListProps[] = [
  {
    icon: "list",
    label: "Liste Employé",
    navigateTo: SCREEN_NAMES.LIST_EMPLOYEES_SCREEN_STACK,
  },
  { icon: "menu", label: "Menu", navigateTo: SCREEN_NAMES.MENU_SCREEN_STACK },
];

const DrawerLayout: React.FC<DrawerListProps> = ({
  icon,
  label,
  navigateTo,
}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <DrawerItem
      icon={() => <Icon name={icon!} size={25} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo, { screen: navigateTo });
      }}
    />
  );
};

const DrawerItems = (props: unknown) => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <>
      <DrawerItem
        label="Menu"
        icon={() => <Icon name="menu" size={25} />}
        onPress={() => navigation.navigate(SCREEN_NAMES.MENU_SCREEN)}
      />
      <DrawerItem
        label={"Liste Employé"}
        onPress={() => navigation.navigate(SCREEN_NAMES.LIST_EMPLOYEES_SCREEN)}
        icon={() => <Icon name="list" size={25} />}
      />
    </>
  );
};

export default DrawerContent;
