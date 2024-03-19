// UserCard.tsx

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {User} from "@common/utils/types/user";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
        <Text style={styles.userDetails}>{user.email}</Text>
        <Text style={styles.userDetails}>{user.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#add8e6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 16
  }
});

export default UserCard;
