import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";
import { DropDownContainer } from "./tracker.styles";
const dropDownTypes = {
  Method: [
    {
      label: "Car",
      value: "car",
    },
    {
      label: "Motorbike",
      value: "motorbike",
    },
  ],
  From: [
    {
      label: "From",
      value: "from",
    },
  ],
  To: [
    {
      label: "To",
      value: "to",
    },
  ],
};

export const DropDownMenu = ({ dropDownType }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [method, setMethod] = useState("");
  return (
    <DropDownContainer>
      <DropDown
        label={dropDownType}
        mode={"outlined"}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={method}
        setValue={setMethod}
        list={dropDownTypes[dropDownType]}
      />
    </DropDownContainer>
  );
};
