import React, {FunctionComponent} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import HomeStackNavigator, {HomeStackParamList} from './HomeStackNavigator';
import ProfileStackNavigator, {
  ProfileStackParamList,
} from './ProfileStackNavigator';
import FavoutiteStackNavigator, {
  FavouriteStackParamList,
} from './FavouriteStackNavigator';
import HomeIcon from '../assets/images/home.svg';
import BookMarkIcon from '../assets/images/bookmark.svg';
import ProfileIcon from '../assets/images/profile.svg';
import ProfileFillIcon from '../assets/images/profile-filled.svg';
import {SvgProps} from 'react-native-svg';
import {PRIMARY_COLOR} from '../constants/colors';

export type RootStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
  FavouriteStack: NavigatorScreenParams<FavouriteStackParamList>;
};

type TabIconParams = {
  props: {
    focused: boolean;
    color: string;
    size: number;
  };
  Icon: FunctionComponent<SvgProps>;
};

const renderTabIcon = (params: TabIconParams) => {
  let Icon = params.Icon;
  if (params.props.focused) {
    return (
      <Icon fill={PRIMARY_COLOR} color={PRIMARY_COLOR} stroke={PRIMARY_COLOR} />
    );
  }
  return <Icon />;
};

const RootStack = createBottomTabNavigator<RootStackParamList>();
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      safeAreaInsets={{
        bottom: 0,
      }}
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <RootStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon(props) {
            return renderTabIcon({props, Icon: HomeIcon});
          },
        }}
      />
      <RootStack.Screen
        name="FavouriteStack"
        component={FavoutiteStackNavigator}
        options={{
          tabBarIcon(props) {
            return renderTabIcon({props, Icon: BookMarkIcon});
          },
        }}
      />
      <RootStack.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon(props) {
            if (props.focused)
              return renderTabIcon({props, Icon: ProfileFillIcon});
            return renderTabIcon({props, Icon: ProfileIcon});
          },
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
