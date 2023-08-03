import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ActionPanelProps = {};
const ActionPanel = () => {
  return (
    <View style={styles.ctn}>
      <Text>ActionPanel</Text>
    </View>
  );
};

export default ActionPanel;

const styles = StyleSheet.create({
  ctn: {
    width: '100%',
    maxWidth: 1200,
    borderWidth: 1,
  },
});
