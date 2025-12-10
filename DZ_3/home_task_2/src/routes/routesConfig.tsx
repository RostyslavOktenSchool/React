import React from "react";
import type { RouteObject } from "react-router-dom";
import Menu from "../components/Menu";
import UsersJsonPlaceholderPage from "../pages/UsersJsonPlaceholderPage";
import UsersDummyJsonPage from "../pages/UsersDummyJsonPage";
import PostsJsonPlaceholderPage from "../pages/PostsJsonPlaceholderPage";
import PostsDummyJsonPage from "../pages/PostsDummyJsonPage";
import CommentsJsonPlaceholderPage from "../pages/CommentsJsonPlaceholderPage";
import CommentsDummyJsonPage from "../pages/CommentsDummyJsonPage";
import { Outlet, Navigate } from "react-router-dom";

const Layout: React.FC = () => (
  <>
    <Menu />
    <Outlet />
  </>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/users/jsonplaceholder" replace /> },
      { path: "/users/jsonplaceholder", element: <UsersJsonPlaceholderPage /> },
      { path: "/users/dummyjson", element: <UsersDummyJsonPage /> },
      { path: "/posts/jsonplaceholder", element: <PostsJsonPlaceholderPage /> },
      { path: "/posts/dummyjson", element: <PostsDummyJsonPage /> },
      { path: "/comments/jsonplaceholder", element: <CommentsJsonPlaceholderPage /> },
      { path: "/comments/dummyjson", element: <CommentsDummyJsonPage /> },
      { path: "*", element: <Navigate to="/users/jsonplaceholder" replace /> },
    ],
  },
];

export default routes;