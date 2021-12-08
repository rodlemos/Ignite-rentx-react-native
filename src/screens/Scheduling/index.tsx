import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import ArrowSvg from "../../assets/arrow.svg";
import { BackButton } from '../../components/BackButton';
import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { Footer } from '../../components/Footer';
import { ICarDTO } from '../../dtos/CarDTO';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { Container, DateInfo, DateTitle, DateValue, Header, RentalPeriod, Title } from './styles';

interface IRentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: ICarDTO;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMakedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod);

  const navigate = useNavigation();
  const routes = useRoute();
  const { car } = routes.params as Params;

  function handleRentalDetails() {    
      navigate.navigate("RentalDetails", {
        car,
        dates: Object.keys(markedDates)
      });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMakedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    })
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <BackButton
          color="light"
          onPress={() => { }}
        />
        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Calendar
        markedDates={markedDates}
        onDayPress={handleChangeDate}
      />

      <Footer
        background="without"
        title="Confirmar"
        onPress={handleRentalDetails}
        enabled={!!rentalPeriod.startFormatted}
      />
    </Container>
  );
}