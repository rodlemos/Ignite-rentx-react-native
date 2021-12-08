import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: ${RFValue(16)}px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(35)}px;
`;

export const CarImage = styled(FastImage)`
  width: 280px;
  height: 132px;
`;