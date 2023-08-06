import {StyleSheet, Text, View, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../navigation/ProfileStackNavigator';
import CartItem from '../../components/CartItem';
import TrashIcon from '../../assets/images/trashcan.svg';

type MyListProps = NativeStackScreenProps<
  ProfileStackParamList,
  'MyListings'
> & {};
const MyList = ({navigation}: MyListProps) => {
  const renderList: ListRenderItem<number> | null | undefined = ({
    item,
    index,
  }) => {
    return (
      <CartItem
        img={require('../../assets/images/12.jpg')}
        onDelete={() => {}}
        DeleteIcon={TrashIcon}
      />
    );
  };

  return (
    <ScreenContainer hidescroll>
      <FlatList
        data={[1, 2, 3]}
        style={{marginTop: 10}}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        renderItem={renderList}
      />
    </ScreenContainer>
  );
};

export default MyList;

const styles = StyleSheet.create({});
