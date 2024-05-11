import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../navigation/TabNavigator";

const Stack = createNativeStackNavigator();

const ListeEmployeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListEmployeScreen"
      screenOptions={{ headerShown: true, title: "Liste Employé" }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default ListeEmployeScreenStack;
