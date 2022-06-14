import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const DropDownContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const TrackerBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/yebs_1gr4_180808.jpg"),
})`
  flex: 1;
  justify-content: center;
`;

export const TrackerCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const TrackerContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const RoundedButtonContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;
