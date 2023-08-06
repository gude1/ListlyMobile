import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import ChairSvg from '../assets/images/chair.svg';
import {PRIMARY_COLOR} from '../constants/colors';
import {SvgProps} from 'react-native-svg';

type IconButtonProps = {
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
  SvgIcon?: React.FC<SvgProps>;
  name?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const IconButton = ({
  style,
  selected = false,
  SvgIcon = ChairSvg,
  name = 'Chair',
  onPress,
}: IconButtonProps) => {
  return (
    <View style={styles.ctn}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {opacity: pressed ? 0.5 : 1.0},
          styles.btn,
          selected && {backgroundColor: '#303030'},
        ]}>
        <SvgIcon
          stroke={selected ? 'white' : ''}
          fill={selected ? 'white' : ''}
        />
      </Pressable>
      <Text
        style={[
          styles.name,
          selected && {color: PRIMARY_COLOR, fontWeight: '700'},
        ]}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    alignItems: 'center',
    minWidth: 60,
    minHeight: 80,
    marginHorizontal: 5,
  },
  btn: {
    backgroundColor: '#F5F5F5',
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#999',
  },
});

export default IconButton;
