import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../navigation/TabNavigator";

const Stack = createNativeStackNavigator();
const MenuScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MenuScreen"
      screenOptions={{ headerShown: false, title: "Menu" }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MenuScreenStack;
