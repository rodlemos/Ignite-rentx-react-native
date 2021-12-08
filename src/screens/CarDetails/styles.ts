import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 19}px;
  margin-left: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;

`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(16),
    alignItems: "center"
  },
  showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_regular};
  color: ${({theme})=> theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  margin-top: 16px;
  line-height: ${RFValue(25)}px;
`;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const OfflineInfo = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_regular};
  color: ${({theme})=> theme.colors.main};
  font-size: ${RFValue(10)}px;
  text-align: center;
`;