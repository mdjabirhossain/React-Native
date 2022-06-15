import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogScreen } from "../../features/tracker/screens/log.screen";
import { ScoreScreen } from "../../features/score/screens/score.screen";
const TrackerStack = createNativeStackNavigator();

export const TrackerNavigator = () => {
  return (
    <TrackerStack.Navigator>
      <TrackerStack.Screen name="Log" component={LogScreen} />
      <TrackerStack.Screen name="Score" component={ScoreScreen} />
    </TrackerStack.Navigator>
  );
};
