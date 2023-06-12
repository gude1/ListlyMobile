import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import RootStackNavigator from './RootStackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
