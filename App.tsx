/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Navigation from './src/navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
}
export default App;
