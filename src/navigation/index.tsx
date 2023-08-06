import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import RootStackNavigator from './RootStackNavigator';
import {useAppDispatch, useAppSelector} from '../redux/hooks/hook';

const Navigation = () => {
  const user = useAppSelector(state => state.user);
  return (
    <NavigationContainer>
      {user.loggedIn ? <RootStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
