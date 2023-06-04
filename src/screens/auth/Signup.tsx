import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import Input from '../../components/Input';
import {SCREEN_HEIGHT} from '../../constant';
import Button from '../../components/Button';
import CheckBox from '@react-native-community/checkbox';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthStackNavigator';

type SignupProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'> & {};
const Signup = ({navigation}: SignupProps) => {
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
          <View style={styles.checkBoxCtn}>
            <CheckBox
              accessibilityLabel="check_box"
              style={{width: 22, height: 22}}
              onFillColor="#8D9BB5"
              onTintColor="#8D9BB5"
              onCheckColor="#fff"
              value={true}
            />
            <Text style={styles.termsTxt}>
              I agree with {'  '}
              <Text style={styles.termsLink}>Terms & Privacy</Text>
            </Text>
          </View>
          <Button style={{marginTop: 25}} title="Sign Up" />
          <Text style={styles.navTxt}>
            Already have an account?{'  '}
            <Text
              style={styles.termsLink}
              onPress={() => navigation.push('SignIn')}>
              Sign In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 80,
    maxWidth: 350,
    width: '100%',
    minHeight: SCREEN_HEIGHT,
    borderColor: 'green',
  },
  ctnInput: {
    marginTop: 20,
    width: '100%',
  },
  checkBoxCtn: {
    flexDirection: 'row',
    marginTop: 22,
    width: '100%',
    alignItems: 'center',
  },
  termsTxt: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    lineHeight: 17.07,
    fontSize: 14,
    marginLeft: 13,
  },
  navTxt: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    lineHeight: 17.07,
    fontSize: 14,
    marginTop: 15,
  },
  termsLink: {
    fontWeight: 'bold',
    color: '#4F63AC',
  },
});
