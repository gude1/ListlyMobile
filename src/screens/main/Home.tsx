import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IconButton from '../../components/IconButton';
import ScreenContainer from '../../components/ScreenContainer';
import TableSvg from '../../assets/images/table.svg';
import BedSvg from '../../assets/images/bed.svg';

// type HomeProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'> & {};
const Home = () => {
  return (
    <ScreenContainer>
      <View style={{paddingTop: 15}}>
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
      </View>
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
