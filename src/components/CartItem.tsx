import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import CancelSvg from '../assets/images/cancel.svg';
import {TEXT_COLOR} from '../constants/colors';

type CartItemProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
const CartItem = ({onPress}: CartItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemCtn}>
        <Image
          source={require('../assets/images/11.jpg')}
          style={styles.cartImg}
          progressiveRenderingEnabled
        />
        <View style={styles.infoCtn}>
          <View style={styles.panel}>
            <Text style={styles.cartName}>Coffee Table</Text>
            <CancelSvg />
          </View>
          <Text style={styles.cartPrice}>N500</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemCtn: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingVertical: 12,
  },
  cartImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cartName: {
    color: '#606060',
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  cartPrice: {
    color: TEXT_COLOR,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  infoCtn: {
    flex: 1,
    marginLeft: 20,
  },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
