import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";
import SCREEN_NAMES from "../constantes/screenName";
import SCREEN_LABEL from "../constantes/screenLabels";

export default function getHeaderTitle<T extends Route<string>>(route: T) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case SCREEN_NAMES.LIST_EMPLOYEES_SCREEN_STACK:
      return SCREEN_LABEL.LISTE_EMPLOYEES;
    case SCREEN_NAMES.MENU_SCREEN_STACK:
      return SCREEN_LABEL.MENU;
    case SCREEN_NAMES.LIST_EMPLOYEES_SCREEN:
      return SCREEN_LABEL.LISTE_EMPLOYEES;
    case SCREEN_NAMES.MENU_SCREEN:
      return SCREEN_LABEL.MENU;
    default:
      return "";
  }
}
