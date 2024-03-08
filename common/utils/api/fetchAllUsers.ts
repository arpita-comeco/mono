import { User } from '../types/user'; // Assuming User type is defined in types.ts or a separate file

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
