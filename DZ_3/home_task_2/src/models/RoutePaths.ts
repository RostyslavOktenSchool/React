export const RoutePaths = {
  USERS_JSON: '/users-json',
  USERS_DUMMY: '/users-dummy',
  POSTS_JSON: '/posts-json',
  POSTS_DUMMY: '/posts-dummy',
  COMMENTS_JSON: '/comments-json',
} as const;

export type RoutePaths = typeof RoutePaths;