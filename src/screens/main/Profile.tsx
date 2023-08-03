import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import {PRIMARY_COLOR, TEXT_COLOR} from '../../constants/colors';

// type ProfileProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'> & {};
const Profile = () => {
  return (
    <ScreenContainer style={{paddingHorizontal: 20}}>
      <Text style={styles.name}>Elina Hovakimyan</Text>
      <Text style={styles.mail}>hello@gmail.com</Text>
    </ScreenContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  name: {
    color: TEXT_COLOR,
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '700',
  },
  mail: {
    textAlign: 'justify',
    fontFamily: 'Montserrat',
    color: '#808080',
    marginTop: 12,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 15,
  },
});
