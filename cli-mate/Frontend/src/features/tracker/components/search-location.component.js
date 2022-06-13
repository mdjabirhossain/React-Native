import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchLocationBar = ({ placeholder }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <SearchContainer>
      <Searchbar
        placeholder={placeholder}
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />
    </SearchContainer>
  );
};
