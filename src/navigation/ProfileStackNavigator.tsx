import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/main/Profile';
import ArrowSvg from '../assets/images/arrow.svg';

export type ProfileStackParamList = {
  Profile: undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        statusBarColor: '#fff',
        statusBarStyle: 'dark',
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => <ArrowSvg />,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
