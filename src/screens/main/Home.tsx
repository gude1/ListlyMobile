import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IconButton from '../../components/IconButton';
import ScreenContainer from '../../components/ScreenContainer';
import ProductItem from '../../components/ProductItem';
import {HomeStackParamList} from '../../navigation/HomeStackNavigator';
import {SvgProps} from 'react-native-svg';
import StarSvg from '../../assets/images/star.svg';
import LaptopSvg from '../../assets/images/laptop.svg';
import CarSvg from '../../assets/images/car.svg';
import TvSvg from '../../assets/images/tv.svg';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'> & {};
type ListData = {
  name: string;
  icon?: React.FC<SvgProps>;
};
const Home = ({navigation}: HomeProps) => {
  const {width, height} = useWindowDimensions();
  const [selectedtabname, setSelectTabName] = useState('popular');
  const numColumns = Math.min(Math.floor(width / 190), 6);

  const CAT: ListData[] = [
    {
      name: 'Popular',
      icon: StarSvg,
    },
    {
      name: 'Home Appliances',
      icon: TvSvg,
    },
    {
      name: 'Furniture',
    },
    {
      name: 'Computers',
      icon: LaptopSvg,
    },
    {
      name: 'Automobiles',
      icon: CarSvg,
    },
  ];

  const renderProductCatItems: ListRenderItem<ListData> = ({item, index}) => {
    return (
      <IconButton
        name={item.name}
        onPress={() => setSelectTabName(item.name.toLowerCase())}
        selected={item.name.toLowerCase() == selectedtabname}
        SvgIcon={item.icon}
      />
    );
  };
  const CatListkeyExtractor = (item: ListData, index: Number): string =>
    String(index);

  const renderProductList: ListRenderItem<number> | null | undefined = ({
    item,
    index,
  }) => {
    let image = null;
    if (index == 2) {
      image = require('../../assets/images/8.jpg');
    } else if (index % 2 > 0) {
      image = require('../../assets/images/10.jpg');
    } else {
      image = require('../../assets/images/12.jpg');
    }
    return (
      <View style={styles.productItemCtn}>
        <ProductItem
          image={image}
          onPress={() => navigation.navigate('ProductDetail')}
        />
      </View>
    );
  };

  return (
    <ScreenContainer style={{maxWidth: 'auto'}}>
      <View style={styles.productTypeCtn}>
        <FlatList
          data={CAT}
          style={{height: 80}}
          renderItem={renderProductCatItems}
          keyExtractor={CatListkeyExtractor}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        style={{marginTop: 10}}
        contentContainerStyle={styles.productListCtn}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
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
