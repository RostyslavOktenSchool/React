import { useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';
import UserList from '../components/UserList';
import Pagination from '../components/Pagination';
import UserDetails from '../components/UserDetails';
import type { IUser } from "../model/IUser";
import './UserPage.css';

function UserPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers(currentPage);
        setUsers(data.users);
        setTotalUsers(data.total);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, [currentPage]);

  const totalPages = Math.ceil(totalUsers / 5);

  return (
    <div className='container'>
      {loading ? (
        <p className='loading'>Завантаження...</p>
      ) : (
        <div className='content-wrapper'>
          <div className='users-section'>
            <h1>Користувачі</h1>
            <UserList users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>

          {selectedUser && (
            <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
          )}
        </div>
      )}
    </div>
  );
}

export default UserPage;