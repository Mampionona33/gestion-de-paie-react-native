import * as React from "react";
import { Text } from "react-native-paper";
import { useAnimatedStyle } from "react-native-reanimated";

const MenuScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      display: isKeyboardVisible ? "none" : "flex",
    };
  }, []);
  return <Text>MenuScreen test</Text>;
};

export default MenuScreen;
