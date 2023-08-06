import {
  StyleProp,
  StyleSheet,
  SafeAreaView,
  View,
  ViewStyle,
  ScrollView,
} from 'react-native';
import React, {ReactNode} from 'react';

type ScreenContainerProps = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children: ReactNode | undefined;
  hidescroll?: boolean;
};

const ScreenContainer = ({
  containerStyle,
  style,
  hidescroll,
  children,
}: ScreenContainerProps) => {
  const render = () => {
    if (hidescroll) {
      return (
        <SafeAreaView style={[styles.container, containerStyle]}>
          <View style={[styles.childCtn, style]}>{children}</View>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={[styles.container, containerStyle]}>
        <ScrollView>
          <View style={[styles.childCtn, style]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  return render();
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'green',
  },
  childCtn: {
    width: '100%',
    maxWidth: 900,
    paddingBottom: 10,
    flex: 1,
    alignSelf: 'center',
    borderColor: 'purple',
  },
});
