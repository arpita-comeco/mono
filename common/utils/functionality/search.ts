import { User } from '../types/user';

export const searchUser = (users: User[], searchText: string) => {
  return users.filter(user =>
    user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchText.toLowerCase())
  );
}

