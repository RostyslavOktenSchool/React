
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import type {IUser} from '../models/IUser';
import {loadUsers} from '../features/users/usersSlice';

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((s) => s.users.items);

  useEffect(() => {
    if (!users.length) {
      dispatch(loadUsers());
    }
  }, [users.length, dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {users.map((u: IUser) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}