import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import EditSvg from '../../assets/images/editpencil.svg';
import Input from '../../components/Input';
import {PRIMARY_COLOR, TEXT_COLOR_GRAY} from '../../constants/colors';
import ActionPanel from '../../components/ActionPanel';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../navigation/ProfileStackNavigator';

type SettingsProps = NativeStackScreenProps<
  ProfileStackParamList,
  'Settings'
> & {};
const Settings = ({navigation}: SettingsProps) => {
  return (
    <ScreenContainer style={{paddingHorizontal: 20}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Personal Information</Text>
        <EditSvg />
      </View>

      <Input
        label="Name"
        containerStyle={styles.inputOuterCtn}
        inputStyle={styles.input}
        inputCtnStyle={styles.inputCtn}
        keyboardType="name-phone-pad"
        value="Owolabi Gideon"
        editable={false}
        labelStyle={styles.inputLabel}
      />

      <Input
        label="Email"
        containerStyle={styles.inputOuterCtn}
        inputStyle={styles.input}
        inputCtnStyle={styles.inputCtn}
        keyboardType="email-address"
        value="gideoniyin2021@gmail.com"
        editable={false}
        labelStyle={styles.inputLabel}
      />

      <View style={[styles.header, {marginTop: 49}]}>
        <Text style={styles.headerText}>Help Center</Text>
      </View>
      <ActionPanel title="FAQ" />
      <ActionPanel title="Contact Us" />
    </ScreenContainer>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#909191',
    marginTop: 22,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
  },
  inputOuterCtn: {
    marginTop: 15,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#8A959E',
        shadowOffset: {width: 0, height: 7},
        shadowRadius: 40,
        shadowOpacity: 0.2,
        backgroundColor: 'white',
      },
      android: {
        elevation: 2,
        backgroundColor: 'white',
      },
    }),
  },
  inputCtn: {
    borderWidth: 0,
    paddingHorizontal: 0,
    maxWidth: 500,
  },
  input: {
    borderWidth: 0,
    color: PRIMARY_COLOR,
    // fontFamily: 'Montserrat',
    fontweight: '600',
  },
  inputLabel: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: TEXT_COLOR_GRAY,
    fontWeight: '400',
  },
});
