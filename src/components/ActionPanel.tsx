import {
  GestureResponderEvent,
  Platform,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../constants/colors';
import ArrowRight from '../assets/images/arrowright.svg';

type ActionPanelProps = {
  title?: string;
  subtitle?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
const ActionPanel = ({
  title = 'Title',
  subtitle = 'Subtitle',
  onPress,
}: ActionPanelProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.ctn}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subtitle}</Text>
        </View>
        <ArrowRight style={{alignSelf: 'center'}} />
      </View>
    </Pressable>
  );
};

export default ActionPanel;

const styles = StyleSheet.create({
  ctn: {
    width: '100%',
    maxWidth: 1200,
    paddingVertical: 18,
    paddingLeft: 20,
    marginTop: 26,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  title: {
    color: PRIMARY_COLOR,
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '700',
  },
  subTitle: {
    textAlign: 'justify',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    marginTop: 5,
  },
});
