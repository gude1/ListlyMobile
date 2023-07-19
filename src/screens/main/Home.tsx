import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IconButton from '../../components/IconButton';
import ScreenContainer from '../../components/ScreenContainer';
import TableSvg from '../../assets/images/table.svg';
import BedSvg from '../../assets/images/bed.svg';
import ProductItem from '../../components/ProductItem';

// type HomeProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'> & {};
const Home = () => {
  return (
    <ScreenContainer>
      <>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          ItemSeparatorComponent={() => <View style={{height: 40}} />}
          renderItem={({item, index}) => {
            if (index == 2) {
              return <IconButton selected />;
            } else if (index % 2 > 0) {
              return <IconButton SvgIcon={BedSvg} />;
            } else {
              return <IconButton SvgIcon={TableSvg} />;
            }
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <View />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          style={{marginTop: 10}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1, alignItems: 'center'}}>
                <ProductItem />
              </View>
            );
          }}
        />
      </>
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
