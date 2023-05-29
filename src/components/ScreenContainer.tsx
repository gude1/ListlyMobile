import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type ScreenContainerProps = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children: ReactNode | undefined;
};
const ScreenContainer = ({
  containerStyle,
  style,
  children,
}: ScreenContainerProps) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={[styles.childCtn, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: 'red',
  },
  childCtn: {
    width: '100%',
    maxWidth: 1200,
    // borderWidth: 2,
    alignSelf: 'center',
    borderColor: 'purple',
  },
});
