// Home.tsx

import React from 'react';
import { View, Button, StyleSheet, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('AllUsers');
  };

  return (
    <View style={[styles.container,
      Platform.OS === 'android' && styles.androidBackground,
      Platform.OS === 'ios' && styles.iosBackground
    ]}>
      <Text style={styles.paragraph}>Welcome to React Native app! 😎</Text>
      <Button title="All Users" onPress={handlePress} />
      <Text style={styles.deviceText}>This is an {Platform.OS} device!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    color: '#00008b',
  },
  androidBackground: {
    backgroundColor: '#aaa7cc',
  },
  iosBackground: {
    backgroundColor: '#926d88',
  },
  deviceText: {
    marginTop: 12,
    color: '#654321',
    fontSize: 30,
  }
});

export default Home;
