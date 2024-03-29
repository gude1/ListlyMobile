import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import Input from '../../components/Input';
import {SCREEN_HEIGHT} from '../../constants/lengths';
import Button from '../../components/Button';
import CheckBox from '@react-native-community/checkbox';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthStackNavigator';
import {useAppDispatch} from '../../redux/hooks/hook';
import {setUser} from '../../redux/slice/UserSlice';

type SigninProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'> & {};
const Signin = ({navigation}: SigninProps) => {
  const dispatch = useAppDispatch();
  return (
    <ScreenContainer>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.container}>
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
        <Button
          style={{marginTop: 25}}
          title="Sign In"
          onPress={() =>
            dispatch(
              setUser({
                loggedIn: true,
              }),
            )
          }
        />
        <Text style={styles.navTxt}>
          Don't have an account?{'  '}
          <Text
            style={styles.termsLink}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
      {/* </ScrollView> */}
    </ScreenContainer>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 80,
    maxWidth: 500,
    width: '90%',
    // minHeight: SCREEN_HEIGHT,
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
    color: '#000',
    fontSize: 14,
    marginTop: 15,
  },
  termsLink: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#4F63AC',
  },
});
