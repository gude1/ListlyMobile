import {StyleSheet, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import CartItem from '../../components/CartItem';
import ScreenContainer from '../../components/ScreenContainer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FavouriteStackParamList} from '../../navigation/FavouriteStackNavigator';

type FavouriteProps = NativeStackScreenProps<
  FavouriteStackParamList,
  'Favourites'
> & {};

const Favourite = ({navigation}: FavouriteProps) => {
  const renderFavouriteList: ListRenderItem<number> | null | undefined = ({
    item,
    index,
  }) => {
    return <CartItem onPress={() => navigation.navigate('ProductDetail')} />;
  };

  return (
    <ScreenContainer style={{maxWidth: 'auto'}}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        style={{marginTop: 10}}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        renderItem={renderFavouriteList}
      />
    </ScreenContainer>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
