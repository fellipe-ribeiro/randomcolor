import { TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRandomColor } from "../../hooks/useRandomColor";

import { styles } from "./styles";

export function InitialScreen() {
  const { color, barAndTextWhite, generateRandomColor } = useRandomColor();

  return (
    <TouchableOpacity
      onPress={generateRandomColor}
      style={[styles.container, { backgroundColor: color || "white" }]}
      activeOpacity={0.7}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        style={barAndTextWhite ? "light" : "dark"}
      />
      <Text
        style={[styles.text, { color: barAndTextWhite ? "white" : "black" }]}
      >
        Hello there
      </Text>
    </TouchableOpacity>
  );
}
