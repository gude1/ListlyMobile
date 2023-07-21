import {
  Dimensions,
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IconButton from '../../components/IconButton';
import ScreenContainer from '../../components/ScreenContainer';
import TableSvg from '../../assets/images/table.svg';
import BedSvg from '../../assets/images/bed.svg';
import ProductItem from '../../components/ProductItem';

// type HomeProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'> & {};
const Home = () => {
  const {width, height} = useWindowDimensions();
  const numColumns = Math.min(Math.floor(width / 200), 6);

  const renderProductCatItems: ListRenderItem<number> | null | undefined = ({
    item,
    index,
  }) => {
    if (index == 2) {
      return <IconButton selected />;
    } else if (index % 2 > 0) {
      return <IconButton SvgIcon={BedSvg} />;
    } else {
      return <IconButton SvgIcon={TableSvg} />;
    }
  };

  const renderProductList: ListRenderItem<number> | null | undefined = ({
    item,
    index,
  }) => {
    return (
      <View style={styles.productItemCtn}>
        <ProductItem />
      </View>
    );
  };

  return (
    <ScreenContainer>
      <View style={styles.productTypeCtn}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          style={{height: 80}}
          ItemSeparatorComponent={() => <View style={{height: 40}} />}
          renderItem={renderProductCatItems}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        style={{marginTop: 10}}
        contentContainerStyle={styles.productListCtn}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        renderItem={renderProductList}
      />
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  productListCtn: {justifyContent: 'center'},
  productItemCtn: {flex: 1, alignItems: 'center'},
  productTypeCtn: {alignItems: 'center', marginTop: 25},
});
