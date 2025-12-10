import React from 'react';
import type { IUser } from "../model/IUser";

interface UserItemProps {
  user: IUser;
  isActive: boolean;
  onClick: () => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, isActive, onClick }) => {
  return (
    <li 
      className={`user-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={user.image} alt={user.firstName} className='user-avatar' />
      <div className='user-info'>
        <p className='user-name'>{user.firstName} {user.lastName}</p>
        <p className='user-email'>{user.email}</p>
      </div>
    </li>
  );
};

export default UserItem;
