import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AppTabRoutes } from './App.tab.routes';
import { useAuth } from '../hooks/Auth';
import { AuthRoutes } from './Auth.routes';
import { AnimatedLoad } from '../components/AnimatedLoading';

export default function Routes() {
  const { user, loading } = useAuth();
  return (
    loading ? <AnimatedLoad />
      :<NavigationContainer>
        {user.id ? <AppTabRoutes /> : <AuthRoutes />}
      </NavigationContainer>
  )
}
