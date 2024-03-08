/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Greeting from '@common/components/Greeting';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>This is React Native here</Text>

          {/* Render the Greeting component directly without enclosing it in Text */}
          <Greeting name="from React Native world!" target="mobile" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default App;
