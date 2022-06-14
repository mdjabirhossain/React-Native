import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { LocationContext } from "../../services/location/location.context";

const Button = styled(TouchableOpacity)`
  border-radius: ${(props) => props.size / 2}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  align-items: center;
  justify-content: center;
  border-color: rgba(255, 255, 255, 0.3);
  border-width: 2px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: ${(props) => (props.size / 3) * 2}px;
`;

// const Button = styled(TouchableOpacity)`
//   border-radius: ${(props) => props.size / 2}px;
//   width: ${(props) => props.size}px;
//   height: ${(props) => props.size}px;
//   align-items: center;
//   justify-content: center;
//   border-color: "#fff";
//   border-width: 2px;
// `;

// const ButtonText = styled.Text`
//   color: #fff;
//   font-size: ${(props) => props.theme.sizes[6]};
// `;

export const RoundedButton = ({ size }) => {
  const { search } = useContext(LocationContext);
  return (
    <Button size={size}>
      <ButtonText size={size}>+</ButtonText>
    </Button>
  );
};
