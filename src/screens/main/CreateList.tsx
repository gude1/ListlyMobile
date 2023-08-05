import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../navigation/ProfileStackNavigator';

type CreateAListProps = NativeStackScreenProps<
  ProfileStackParamList,
  'CreateList'
> & {};
const CreateList = () => {
  return (
    <ScreenContainer>
      <Text>AddList</Text>
    </ScreenContainer>
  );
};

export default CreateList;

const styles = StyleSheet.create({});
