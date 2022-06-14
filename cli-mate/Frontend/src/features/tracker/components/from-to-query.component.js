import React, { useState, useContext } from "react";
import { SearchLocationBar } from "./search-location.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const FromToQuery = () => {
  const { search } = useContext(LocationContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <SearchContainer>
      <Searchbar
        icon="map-marker"
        placeholder="From"
        value={from}
        onChangeText={(text) => {
          setFrom(text);
        }}
        onSubmitEditing={() => {
          if (from && to) {
            search(from, to);
          }
        }}
      />
      <Spacer position="bottom" size="large" />
      <Searchbar
        icon="map-marker"
        placeholder="To"
        value={to}
        onChangeText={(text) => {
          setTo(text);
        }}
        onSubmitEditing={() => {
          if (from && to) {
            search(from, to);
          }
        }}
      />
    </SearchContainer>
  );
};
