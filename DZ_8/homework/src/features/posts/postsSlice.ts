
import {createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit';
import type {IPost} from '../../models/IPost';

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return (await res.json()) as IPost[];
});

type PostsState = {items: IPost[]; filled: boolean; loading: boolean; error?: string | null};

const initialState: PostsState = {items: [], filled: false, loading: false, error: null};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.items = action.payload;
      state.filled = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.items = action.payload;
        state.filled = true;
        state.loading = false;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'load failed';
      });
  },
});

export const {setPosts} = postsSlice.actions;
export default postsSlice.reducer;