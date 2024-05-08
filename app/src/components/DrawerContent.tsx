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
    navigateTo: SCREEN_NAMES.LIST_EMPLOYEES_SCREEN,
  },
  { icon: "menu", label: "Menu", navigateTo: SCREEN_NAMES.MENU_SCREEN },
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
      onPress={() => navigation.navigate(navigateTo)}
    />
  );
};

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <>
      {DrawerList.map((item, index) => (
        <DrawerLayout
          key={index}
          icon={item.icon}
          label={item.label}
          navigateTo={item.navigateTo}
        />
      ))}
    </>
  );
};

export default DrawerContent;
