'use client'
import { fetchAllUsers } from "@common/utils/api/fetchAllUsers";
import { useEffect, useState } from 'react';
import {User} from "@common/utils/types/user";
import styled from 'styled-components';
import UserCard from "./UserCard";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const allUsers: User[] = await fetchAllUsers();
        setUsers(allUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    getUsers().then();
  }, []);

  return (
      <Container>{users.map(user => <UserCard key={user.id} user={user} />)}</Container>
  );
};

export default AllUsers;


