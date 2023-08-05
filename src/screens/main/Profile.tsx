import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import {TEXT_COLOR, TEXT_COLOR_GRAY} from '../../constants/colors';
import ActionPanel from '../../components/ActionPanel';
import Button from '../../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../navigation/ProfileStackNavigator';

type ProfileProps = NativeStackScreenProps<
  ProfileStackParamList,
  'Profile'
> & {};
const Profile = ({navigation}: ProfileProps) => {
  return (
    <ScreenContainer style={{paddingHorizontal: 20}}>
      <Text style={styles.name}>Elina Hovakimyan</Text>
      <Text style={styles.mail}>hello@gmail.com</Text>
      <ActionPanel
        title="My Listings"
        subtitle="Already have 10 listing"
        onPress={() => {
          navigation.navigate('MyListings');
        }}
      />
      <ActionPanel
        title="Settings"
        subtitle="Account, FAQ, Contact"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />

      <Button
        title="Add a new listing"
        style={styles.actionBtn}
        onPress={() => {
          navigation.navigate('CreateList');
        }}
      />
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
  actionBtn: {
    marginTop: 100,
    alignSelf: 'center',
  },
});
