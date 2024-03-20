import React from 'react';
import styled from 'styled-components';
import { User } from "@common/utils/types/user";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    border: 1px solid #999;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserDetails = styled.div`
  flex-grow: 1;
`;

const UserCard = ({ user }: { user: User }) => {
  return (
    <Card>
      <UserInfo>
        <Avatar src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <UserDetails>
          <h2>{user.firstName} {user.lastName}</h2>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
        </UserDetails>
      </UserInfo>
    </Card>
  );
};

export default UserCard;
