import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../navigation/ProfileStackNavigator';
import {IMG_BACKGROUND_COLOR, PRIMARY_COLOR} from '../../constants/colors';
import AddSvg from '../../assets/images/add.svg';
import CancelSvg from '../../assets/images/cancel.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

type CreateListProps = NativeStackScreenProps<
  ProfileStackParamList,
  'CreateList'
> & {};
const CreateList = ({}: CreateListProps) => {
  return (
    <ScreenContainer style={[styles.pageCtn]}>
      <Text style={styles.pageTitle}>Upload photos</Text>
      <View style={styles.uploadCtn}>
        <Pressable>
          <View style={styles.uploadBtn}>
            <AddSvg />
          </View>
        </Pressable>

        <ImageBackground
          style={styles.uploadedImg}
          source={require('../../assets/images/12.jpg')}>
          <CancelSvg
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
            }}
          />
        </ImageBackground>
      </View>
      <Input containerStyle={styles.ctnInput} label="Title" />
      <Input containerStyle={styles.ctnInput} label="Category" />
      <Input containerStyle={styles.ctnInput} label="Price" />
      <Input containerStyle={styles.ctnInput} label="Description" />

      <Button title="Submit" style={{marginTop: 24}} />
    </ScreenContainer>
  );
};

export default CreateList;

const styles = StyleSheet.create({
  pageCtn: {
    paddingHorizontal: 20,
    alignItems: 'center',
    maxWidth: 700,
  },
  pageTitle: {
    color: PRIMARY_COLOR,
    fontFamily: 'Montserrat',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 7,
    fontWeight: '500',
  },
  uploadCtn: {
    marginTop: 11,
    width: '100%',
    flexDirection: 'row',
  },
  uploadBtn: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  uploadedImg: {
    position: 'relative',
    borderRadius: 8,
    marginLeft: 10,
    width: 90,
    backgroundColor: IMG_BACKGROUND_COLOR,
    height: 90,
  },
  ctnInput: {
    maxWidth: 500,
    marginTop: 24,
  },
});
