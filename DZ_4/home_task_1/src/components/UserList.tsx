import React from 'react';
import UserItem from './UserItem';
import type { IUser } from "../model/IUser";

interface UserListProps {
  users: IUser[];
  selectedUser: IUser | null;
  setSelectedUser: (user: IUser | null) => void;
}

const UserList: React.FC<UserListProps> = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <ul className='users-list'>
      {users.map(user => (
        <UserItem 
          key={user.id}
          user={user}
          isActive={selectedUser?.id === user.id}
          onClick={() => setSelectedUser(user)}
        />
      ))}
    </ul>
  );
};

export default UserList;
