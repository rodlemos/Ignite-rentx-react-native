import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CarDetails } from '../screens/CarDetails';
import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { RentalDetails } from '../screens/RentalDetails';
import { Scheduling } from '../screens/Scheduling';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="CarDetails"
        component={CarDetails}
      />

      <Screen
        name="Scheduling"
        component={Scheduling}
      />

      <Screen
        name="RentalDetails"
        component={RentalDetails}
      />

      <Screen
        name="Confirmation"
        component={Confirmation}
      />

      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  )
}