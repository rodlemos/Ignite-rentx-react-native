import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  background: "with" | "without";
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: ${getBottomSpace() + RFValue(24)}px;
  background-color: ${({theme, background})=> background === "with"
    ? theme.colors.background_primary
    : "transparent"
  };
`;