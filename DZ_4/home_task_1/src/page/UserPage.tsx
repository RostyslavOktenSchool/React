import { useState, useEffect } from 'react';
import type { IUser } from "../model/IUser";
import './UserPage.css';

function UserPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  
  const USERS_PER_PAGE = 5;

  useEffect(() => {
    const skip = (currentPage - 1) * USERS_PER_PAGE;
    
    setLoading(true);
    fetch(`https://dummyjson.com/users?limit=${USERS_PER_PAGE}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setTotalUsers(data.total);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);

  return (
    <div className='container'>
      {loading ? (
        <p className='loading'>Завантаження...</p>
      ) : (
        <div className='content-wrapper'>
          <div className='users-section'>
            <h1>Користувачі</h1>
            <ul className='users-list'>
              {users.map(user => (
                <li 
                  key={user.id}
                  className={`user-item ${selectedUser?.id === user.id ? 'active' : ''}`}
                  onClick={() => setSelectedUser(user)}
                >
                  <img src={user.image} alt={user.firstName} className='user-avatar' />
                  <div className='user-info'>
                    <p className='user-name'>{user.firstName} {user.lastName}</p>
                    <p className='user-email'>{user.email}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className='pagination'>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className='btn-pagination'
              >
                ← Попередня
              </button>
              
              <span className='page-info'>Сторінка {currentPage} з {totalPages}</span>
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className='btn-pagination'
              >
                Наступна →
              </button>
            </div>
          </div>

          {selectedUser && (
            <div className='details-section'>
              <button 
                className='close-btn'
                onClick={() => setSelectedUser(null)}
              >
                ✕
              </button>
              <img src={selectedUser.image} alt={selectedUser.firstName} className='details-avatar' />
              <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
              
              <div className='details-grid'>
                <div className='detail-item'>
                  <span className='label'>Вік:</span>
                  <span>{selectedUser.age} років</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Стать:</span>
                  <span>{selectedUser.gender === 'male' ? 'Чоловік' : 'Жінка'}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Email:</span>
                  <span>{selectedUser.email}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Телефон:</span>
                  <span>{selectedUser.phone}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Ім'я користувача:</span>
                  <span>{selectedUser.username}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Дата народження:</span>
                  <span>{new Date(selectedUser.birthDate).toLocaleDateString('uk-UA')}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Група крові:</span>
                  <span>{selectedUser.bloodGroup}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Ріст:</span>
                  <span>{selectedUser.height} см</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Вага:</span>
                  <span>{selectedUser.weight} кг</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Колір очей:</span>
                  <span>{selectedUser.eyeColor}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Колір волосся:</span>
                  <span>{selectedUser.hair.color}</span>
                </div>
                <div className='detail-item'>
                  <span className='label'>Тип волосся:</span>
                  <span>{selectedUser.hair.type}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserPage;