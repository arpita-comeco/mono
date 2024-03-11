// AllUsersScreen.js

// import React from 'react';
// import { View, Text } from 'react-native';
//
// const AllUsersScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>All Users Screen</Text>
//     </View>
//   );
// };
//
// export default AllUsersScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {fetchAllUsers} from "@common/utils/api/fetchAllUsers";// Adjust the import path as per your project structure

const AllUsersScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData().then();
  }, []);

  const renderUserItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Text style={styles.userName}>{item.firstName}</Text>
      {/* Add more user details here */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  userContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AllUsersScreen;


