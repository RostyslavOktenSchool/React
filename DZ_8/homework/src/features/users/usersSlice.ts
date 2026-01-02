
import {createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit';
import type {IUser} from '../../models/IUser';

export const loadUsers = createAsyncThunk('users/loadUsers', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return (await res.json()) as IUser[];
});

type UsersState = {items: IUser[]; filled: boolean; loading: boolean; error?: string | null};

const initialState: UsersState = {items: [], filled: false, loading: false, error: null};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.items = action.payload;
      state.filled = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.items = action.payload;
        state.filled = true;
        state.loading = false;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'load failed';
      });
  },
});

export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer;