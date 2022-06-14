import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { TrackerScreen } from "../../features/tracker/screens/tracker.screen";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Tracker: "home",
  Log: "log",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

const LogScreen = () => {
  return <Text>Log</Text>;
};

const SettingsScreen = () => {
  return <Text>Settings</Text>;
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "#8A9A5B", //olive or sage green
      inactiveTintColor: colors.brand.muted,
    }}
  >
    <Tab.Screen name="Tracker" component={TrackerScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
