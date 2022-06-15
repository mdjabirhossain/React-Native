import React, { useState } from "react";
import {
  DropDownContainer,
  TrackerBackground,
  TrackerCover,
  TrackerContainer,
  RoundedButtonContainer,
  Title,
} from "../components/tracker.styles";
import { SafeAreaView, StyleSheet } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { DropDownMenu } from "../components/dropdown.component";
import { SearchLocationBar } from "../components/search-location.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import { RoundedButton } from "../../../components/utility/rounded-button.component";
import { FromToQuery } from "../components/from-to-query.component";
const ToggleContainer = styled.View`
  flex-direction: row;
`;

export const LogScreen = ({ navigation }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [method, setMethod] = useState("");
  const [toggleTransportation, setToggleTransportation] = useState(true);
  const [togglePower, setTogglePower] = useState(false);
  console.log("navigation ", navigation);
  return (
    <SafeAreaView style={styles.safeContainerStyle}>
      <TrackerBackground>
        <TrackerCover />
        <TrackerContainer>
          <Spacer position="top" size="medium" />
          <DropDownMenu dropDownType="Method" />
          <FromToQuery navigation={navigation} />
          <Spacer position="bottom" size="large" />
        </TrackerContainer>
        {/* <RoundedButtonContainer>
          <Spacer position="top" size="medium" />
          <RoundedButton size={100} />
        </RoundedButtonContainer> */}
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
