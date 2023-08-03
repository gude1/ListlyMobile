import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import {
  PRIMARY_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_GRAY,
} from '../../constants/colors';
import ActionPanel from '../../components/ActionPanel';

// type ProfileProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'> & {};
const Profile = () => {
  return (
    <ScreenContainer style={{paddingHorizontal: 20}}>
      <Text style={styles.name}>Elina Hovakimyan</Text>
      <Text style={styles.mail}>hello@gmail.com</Text>
      <ActionPanel title="My Listings" subtitle="Already have 10 listing" />
      <ActionPanel title="Settings" subtitle="Account, FAQ, Contact" />
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
    color: TEXT_COLOR_GRAY,
    marginTop: 12,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 15,
  },
});
