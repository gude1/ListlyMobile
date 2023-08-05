import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import EditSvg from '../../assets/images/editpencil.svg';
import Input from '../../components/Input';

const Settings = () => {
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
      />

      <Input
        label="Email"
        containerStyle={styles.inputOuterCtn}
        inputStyle={styles.input}
        inputCtnStyle={styles.inputCtn}
        keyboardType="email-address"
        value="Owolabi Gideon"
        editable={false}
      />
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
    width: '100%',
    maxWidth: 500,
    marginTop: 15,
    alignSelf: 'center',
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
  },
  input: {
    borderWidth: 0,
  },
});
