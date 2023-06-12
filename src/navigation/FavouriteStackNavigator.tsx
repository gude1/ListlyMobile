import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favourite from '../screens/main/Favourite';

export type FavouriteStackParamList = {
  Favourite: undefined;
};

const FavouriteStack = createNativeStackNavigator<FavouriteStackParamList>();

const FavoutiteStackNavigator = () => {
  return (
    <FavouriteStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <FavouriteStack.Screen name="Favourite" component={Favourite} />
    </FavouriteStack.Navigator>
  );
};

export default FavoutiteStackNavigator;
