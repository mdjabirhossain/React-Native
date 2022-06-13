import React, { useState } from "react";
import {
  DropDownContainer,
  TrackerBackground,
  TrackerCover,
  TrackerContainer,
  Title,
} from "../components/tracker.styles";
import { SafeAreaView, StyleSheet } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { DropDownMenu } from "../components/dropdown.component";
import { SearchLocationBar } from "../components/search-location.component";

const methodsList = [
  {
    label: "Car",
    value: "car",
  },
  {
    label: "Motorbike",
    value: "motorbike",
  },
];

export const TrackerScreen = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [method, setMethod] = useState("");
  return (
    <SafeAreaView style={styles.safeContainerStyle}>
      <TrackerBackground>
        <TrackerCover />
        <TrackerContainer>
          <DropDownMenu dropDownType="Method" />
          <SearchLocationBar placeholder="From" />
          <SearchLocationBar placeholder="To" />
        </TrackerContainer>
      </TrackerBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainerStyle: {
    flex: 1,
    justifyContent: "center",
  },
});
