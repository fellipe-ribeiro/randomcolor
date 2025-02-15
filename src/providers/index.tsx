import React, { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <SafeAreaProvider>{children}</SafeAreaProvider>
);
