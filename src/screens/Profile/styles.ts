import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface OptionProps {
  active: boolean;
}

export const Container = styled.ScrollView`
  background-color: ${({theme})=> theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(227)}px;
  padding: 0 ${RFValue(24)}px ;
  background-color: ${({theme})=> theme.colors.header};
  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight()  + RFValue(30)}px;
  padding: 0 ;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  color: ${({theme})=> theme.colors.background_secundary};
`;

export const LogoutButton = styled(BorderlessButton)`
  
`;

export const PhotoContainer = styled.View`
  margin-top: ${RFValue(50)}px;
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  background-color: ${({theme})=> theme.colors.shape};
  border-radius: 90px;
`;

export const Photo = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  background-color: ${({theme})=> theme.colors.main};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${RFValue(4)}px;
  right: ${RFValue(4)}px;
`;

export const Content = styled.View`
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(122)}px;
`;

export const Options = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({theme})=> theme.colors.line};
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${RFValue(24)}px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  padding-bottom: ${RFValue(14)}px;
  ${({active})=> active && css`
    border-bottom-width: ${RFValue(3)}px;
    border-bottom-color: ${({theme})=> theme.colors.main};
  `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  color: ${({theme, active})=> active 
    ? theme.colors.title
    : theme.colors.text_detail};
`;

export const Section = styled.View`
  
`;