// Home.tsx

import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('AllUsers');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcome to cooool React Native app! 😎</Text>
      <Button title="All Users" onPress={handlePress} />
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
    color: 'orange',
  },
});

export default Home;
