import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import CancelSvg from '../assets/images/cancel.svg';
import {IMG_BACKGROUND_COLOR, TEXT_COLOR} from '../constants/colors';
import {SvgProps} from 'react-native-svg';

type CartItemProps = {
  DeleteIcon?: React.FC<SvgProps>;
  img?: ImageSourcePropType;
  onDelete?: ((event: GestureResponderEvent) => void) | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
const CartItem = ({img, onPress, onDelete, DeleteIcon}: CartItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemCtn}>
        <Image
          source={img || require('../assets/images/11.jpg')}
          style={styles.cartImg}
          progressiveRenderingEnabled
        />
        <View style={styles.infoCtn}>
          <View style={styles.panel}>
            <Text style={styles.cartName}>Coffee Table</Text>
            {DeleteIcon ? (
              <DeleteIcon onPress={onDelete} />
            ) : (
              <CancelSvg onPress={onDelete} />
            )}
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
    backgroundColor: IMG_BACKGROUND_COLOR,
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
