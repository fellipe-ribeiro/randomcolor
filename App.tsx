import { StyleSheet } from "react-native";
import { AppProvider } from "./src/providers";

import { InitialScreen } from "./src/screens/InitialScreen";

export default function App() {
  return (
    <AppProvider>
      <InitialScreen />
    </AppProvider>
  );
}
