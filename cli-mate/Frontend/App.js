import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LogScreen } from "./src/features/tracker/screens/log.screen";
import { ThemeProvider } from "styled-components/native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { LocationContextProvider } from "./src/services/location/location.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <LocationContextProvider>
            <Navigation />
          </LocationContextProvider>
        </PaperProvider>
      </ThemeProvider>
    </>
  );
}
