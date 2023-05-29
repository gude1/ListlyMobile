import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoard from '../screens/auth/OnBoard';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  OnBoard: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: '#4F63AC',
        },
        headerTintColor: '#4F63AC',
        headerShadowVisible: false,
        statusBarColor: '#fff',
        statusBarStyle: 'dark',
      }}>
      <AuthStack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={Signin}
        options={{
          headerTitle: 'Sign In',
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={Signup}
        options={{
          headerTitle: 'Sign Up',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
