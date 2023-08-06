import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {IMG_BACKGROUND_COLOR} from '../constants/colors';

type ProductItemProps = {
  onPress?: () => void;
  title?: string;
  amount?: string;
  image?: ImageSourcePropType;
};
const ProductItem = ({
  onPress,
  title = 'Black Simple Lamp',
  amount = '$12.00',
  image = require('../assets/images/1.jpg'),
}: ProductItemProps) => {
  return (
    <TouchableOpacity style={styles.ctn} onPress={onPress}>
      <Image style={styles.img} progressiveRenderingEnabled source={image} />
      <View style={styles.textctn}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ctn: {
    // borderWidth: 2,
    borderColor: 'red',
    // marginHorizontal: 8,
    // marginVertical: 8,
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: '#606060',
    fontWeight: '400',
  },
  img: {
    width: 180,
    height: 236,
    borderRadius: 10,
    backgroundColor: IMG_BACKGROUND_COLOR,
  },
  amount: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: 'black',
    fontSize: 14,
  },
  textctn: {
    marginTop: 10,
  },
});

export default ProductItem;
