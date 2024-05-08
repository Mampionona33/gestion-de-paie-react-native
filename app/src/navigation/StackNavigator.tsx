import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Entypo";
import ListeEmployeScreenStack from "../stack/ListeEmployeScreenStack";
import MenuScreenStack from "../stack/MenuScreenStack";
import SCREEN_NAMES from "../constantes/screenName";

const Stack = createNativeStackNavigator();

export default function StackNavigator({ navigation }: any) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Icon name="menu" size={30} onPress={() => navigation.openDrawer()} />
        ),
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name={SCREEN_NAMES.LIST_EMPLOYEES_SCREEN_STACK}
        component={ListeEmployeScreenStack}
        options={({ navigation }) => ({
          title: "Liste Employé",
        })}
      />
      <Stack.Screen
        name={SCREEN_NAMES.MENU_SCREEN_STACK}
        component={MenuScreenStack}
        options={({ navigation }) => ({
          title: "Menu",
        })}
      />
    </Stack.Navigator>
  );
}
