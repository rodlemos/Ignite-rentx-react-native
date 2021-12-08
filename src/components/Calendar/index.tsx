import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler } from 'react-native-calendars';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { ptBr } from './localeConfig';
import { Container } from './styles';

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <Container>
      <CustomCalendar
        renderArrow={(direction)=> 
          <Feather 
            size={24} 
            color={theme.colors.text}
            name={direction === 'right' ? "chevron-right" : 'chevron-left'}
          />
        }
        headerStyle={{
          borderBottomColor: theme.colors.line,
          borderBottomWidth: 0.5,
          paddingBottom: 10,
          
        }}
        theme={{
          textDayFontFamily: theme.fonts.primary_regular,
          textDayFontSize: RFValue(15),
          textDayHeaderFontFamily: theme.fonts.primary_medium,
          textDayHeaderFontSize: 10,
          monthTextColor: theme.colors.title,
          textMonthFontFamily: theme.fonts.secundary_semibold,
          textMonthFontSize: 20,
          arrowStyle: {
            marginHorizontal: -15
          }
        }}
        firstDay={1}
        minDate={new Date()}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
      />
    </Container>
  );
}