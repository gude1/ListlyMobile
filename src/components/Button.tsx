import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';

type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
};
const Button = ({style, title = 'Button', textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} activeOpacity={0.8}>
      <Text style={[styles.btnTxt, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4F63AC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    maxWidth: 303,
    height: 60,
  },
  btnTxt: {
    fontWeight: '700',
    fontSize: 18,
    color: '#fff',
    lineHeight: 19.5,
  },
});

export default Button;
