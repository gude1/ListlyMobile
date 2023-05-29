import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import OnBoardSvg from '../../assets/images/onboard.svg';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import {SCREEN_HEIGHT} from '../../constant';

const OnBoard = ({}) => {
  return (
    <ScreenContainer>
      <ScrollView>
        <View style={styles.container}>
          <OnBoardSvg style={styles.onboardSvg} />
          <Text style={styles.introTxt}>You’ll Find</Text>
          <Text
            style={[
              styles.introTxt,
              {color: '#FCA34D', marginTop: 2, textDecorationLine: 'underline'},
            ]}>
            All you need
          </Text>
          <Text
            style={[
              styles.introTxt,
              {
                marginTop: 2,
              },
            ]}>
            Here!
          </Text>

          <Button title="Sign Up" style={{marginTop: 20}} />
          <Button
            title="Sign In"
            style={{marginTop: 20, backgroundColor: 'transparent'}}
            textStyle={{color: '#4F63AC'}}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    alignItems: 'center',
    minHeight: SCREEN_HEIGHT,
    justifyContent: 'center',
    borderColor: 'green',
  },
  onboardSvg: {
    width: 357,
    height: 209,
    marginTop: 50,
  },
  introTxt: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '700',
    color: '#000',
    width: 300,
    marginTop: 50,
  },
});

export default OnBoard;
