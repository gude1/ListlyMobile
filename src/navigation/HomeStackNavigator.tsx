import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/main/Home';
import ProductDetail from '../screens/main/ProductDetail';

export type HomeStackParamList = {
  Home: undefined;
  ProductDetail: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: 'slide_from_right',
        statusBarColor: '#fff',
        statusBarStyle: 'dark',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'Find all you need'}}
      />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          statusBarStyle: 'dark',
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
