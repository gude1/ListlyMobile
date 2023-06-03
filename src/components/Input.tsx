import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export type InputProps = {};
const Input = () => {
  return (
    <View style={[styles.inputCtn]}>
      <Text>Name</Text>
      <TextInput style={{borderWidth: 1}} placeholder="TextInput" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputCtn: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Input;
