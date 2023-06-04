import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import Input from '../../components/Input';
import {SCREEN_HEIGHT} from '../../constant';
import Button from '../../components/Button';

const Signup = () => {
  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input
            containerStyle={styles.ctnInput}
            label="Name"
            textContentType="name"
            placeholder="John Doe"
          />
          <Input
            containerStyle={styles.ctnInput}
            label="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="example@mail.com"
          />
          <Input
            containerStyle={styles.ctnInput}
            label="Password"
            textContentType="password"
            secureTextEntry
            placeholder="****************"
          />

          <Button style={{marginTop: 25}} title="Sign Up" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    alignItems: 'center',
    paddingTop: 80,
    minHeight: SCREEN_HEIGHT,
    borderColor: 'green',
  },
  ctnInput: {
    maxWidth: 350,
    marginTop: 20,
    width: '100%',
  },
});
