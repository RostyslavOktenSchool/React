import React from 'react';
import type { IUser } from "../model/IUser";

interface UserDetailsProps {
  user: IUser;
  onClose: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => {
  return (
    <div className='details-section'>
      <button className='close-btn' onClick={onClose}>✕</button>
      <img src={user.image} alt={user.firstName} className='details-avatar' />
      <h2>{user.firstName} {user.lastName}</h2>
      
      <div className='details-grid'>
        <div className='detail-item'>
          <span className='label'>Вік:</span>
          <span>{user.age} років</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Стать:</span>
          <span>{user.gender === 'male' ? 'Чоловік' : 'Жінка'}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Email:</span>
          <span>{user.email}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Телефон:</span>
          <span>{user.phone}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Ім'я користувача:</span>
          <span>{user.username}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Дата народження:</span>
          <span>{new Date(user.birthDate).toLocaleDateString('uk-UA')}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Група крові:</span>
          <span>{user.bloodGroup}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Ріст:</span>
          <span>{user.height} см</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Вага:</span>
          <span>{user.weight} кг</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Колір очей:</span>
          <span>{user.eyeColor}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Колір волосся:</span>
          <span>{user.hair.color}</span>
        </div>
        <div className='detail-item'>
          <span className='label'>Тип волосся:</span>
          <span>{user.hair.type}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;