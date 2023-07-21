import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

type ProductItemProps = {};
const ProductItem = ({}: ProductItemProps) => {
  return (
    <View style={styles.ctn}>
      <Image
        style={{width: 180, height: 236, borderRadius: 10}}
        progressiveRenderingEnabled
        source={require('../assets/images/splash.png')}
      />
      <View style={styles.textctn}>
        <Text style={styles.name}>Black Simple Lamp</Text>
        <Text style={styles.amount}>$ 12.00</Text>
      </View>
    </View>
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
