import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favourite from '../screens/main/Favourite';
import ProductDetail from '../screens/main/ProductDetail';

export type FavouriteStackParamList = {
  Favourites: undefined;
  ProductDetail: undefined;
};

const FavouriteStack = createNativeStackNavigator<FavouriteStackParamList>();

const FavoutiteStackNavigator = () => {
  return (
    <FavouriteStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        statusBarColor: '#fff',
        statusBarStyle: 'dark',
      }}>
      <FavouriteStack.Screen name="Favourites" component={Favourite} />
      <FavouriteStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          statusBarStyle: 'dark',
          headerShown: false,
        }}
      />
    </FavouriteStack.Navigator>
  );
};

export default FavoutiteStackNavigator;
