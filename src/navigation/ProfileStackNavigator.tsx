import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/main/Profile';
import ArrowSvg from '../assets/images/arrow.svg';
import Settings from '../screens/main/Settings';
import MyList from '../screens/main/MyList';
import CreateList from '../screens/main/CreateList';

export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
  MyListings: undefined;
  CreateList: undefined;
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

      <ProfileStack.Screen name="Settings" component={Settings} />
      <ProfileStack.Screen
        name="MyListings"
        component={MyList}
        options={{
          headerTitle: 'My Listings',
        }}
      />

      <ProfileStack.Screen
        name="CreateList"
        component={CreateList}
        options={{
          headerTitle: 'Create a new listing',
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
