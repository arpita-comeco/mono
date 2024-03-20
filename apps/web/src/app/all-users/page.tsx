'use client'
import { fetchAllUsers } from "@common/utils/api/fetchAllUsers";
import { searchUser } from "@common/utils/functionality/search";
import { useEffect, useState } from 'react';
import {User} from "@common/utils/types/user";
import styled from 'styled-components';
import UserCard from "./UserCard";


const SearchContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the search bar horizontally */
`;

const SearchBar = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const allUsers: User[] = await fetchAllUsers();
        setUsers(allUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setisLoading(false); // Set loading to false regardless of success or error
      }
    }

    getUsers().then();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = searchUser(users, searchQuery);

  return (
    <div>
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search user!"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </SearchContainer>
      {isLoading ? (<LoadingSpinner>
          <div>Loading...</div>
        </LoadingSpinner>)  :
        <Container>
          {filteredUsers.map(user => <UserCard key={user.id} user={user} />)}
        </Container>}
    </div>
  );
};

export default AllUsers;


