import { User } from '../types/user';

export const fetchAllUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    if (response.ok) {
      const userResp = await response.json();
      return userResp.users;
    } else {
      throw new Error('Failed to fetch users');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
