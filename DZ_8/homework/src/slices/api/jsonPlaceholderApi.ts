// src/features/api/jsonPlaceholderApi.ts
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IUser} from '../../models/IUser';
import type {IPost} from '../../models/IPost';
import type {IComment} from '../../models/IComment';

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({query: () => 'users'}),
    getPosts: builder.query<IPost[], void>({query: () => 'posts'}),
    getComments: builder.query<IComment[], void>({query: () => 'comments'}),
  }),
});

export const {
  useGetUsersQuery,
  useGetPostsQuery,
  useGetCommentsQuery,
} = jsonPlaceholderApi;

// RTK Query отключён — в проекте используется загрузка через thunks (loadUsers/loadPosts/loadComments).
// Файл оставлен как заглушка на случай возврата к RTK Query или для справки.
export {};