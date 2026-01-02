
import {createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit';
import type {IComment} from '../../models/IComment';

export const loadComments = createAsyncThunk('comments/loadComments', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  if (!res.ok) throw new Error('Failed to fetch comments');
  return (await res.json()) as IComment[];
});

type CommentsState = {items: IComment[]; filled: boolean; loading: boolean; error?: string | null};

const initialState: CommentsState = {items: [], filled: false, loading: false, error: null};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<IComment[]>) {
      state.items = action.payload;
      state.filled = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.items = action.payload;
        state.filled = true;
        state.loading = false;
      })
      .addCase(loadComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'load failed';
      });
  },
});

export const {setComments} = commentsSlice.actions;
export default commentsSlice.reducer;