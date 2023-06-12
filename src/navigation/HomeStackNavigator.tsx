import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/main/Home';
import Product from '../screens/main/Product';

export type HomeStackParamList = {
  Home: undefined;
  Product: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} options={{}} />
      <HomeStack.Screen name="Product" component={Product} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
