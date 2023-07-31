import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BackBtn from '../../assets/images/back_btn.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigator';
import {TEXT_COLOR} from '../../constants/colors';

type ProductDetailProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductDetail'
> & {};
const ProductDetail = ({navigation}: ProductDetailProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        progressiveRenderingEnabled
        source={require('../../assets/images/3.jpg')}
        style={styles.imageBackground}>
        <TouchableOpacity style={styles.backBtn}>
          <BackBtn onPress={() => navigation.pop()} />
        </TouchableOpacity>

        <View style={styles.infoModal}>
          <Text style={styles.productTitle}>Minimal Stand</Text>
          <Text style={styles.productPrice}>$ 50</Text>
          <Text style={styles.productDesc}>
            Minimal Stand is made of by natural wood. The design that is very
            simple and minimal. This is truly one of the best furnitures in any
            family for now. With 3 different colors, you can easily select the
            best match for your home.
          </Text>

          <View style={styles.actionPanel}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#ededed',
    resizeMode: 'center', // This ensures the image fills the entire container without stretching
  },
  backBtn: {
    marginTop: 45,
  },
  infoModal: {
    // flex: 0.5,
    minHeight: 38,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingBottom: 30,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  productTitle: {
    marginTop: 19,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: TEXT_COLOR,
    fontSize: 24,
  },
  productPrice: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: TEXT_COLOR,
    marginTop: 10,
    fontSize: 30,
  },
  productDesc: {
    marginTop: 19,
    fontWeight: '300',
    textAlign: 'justify',
    color: '#606060',
  },
  actionPanel: {
    marginTop: 80,
  },
});

export default ProductDetail;
