import React from "react";
import type { RouteObject } from "react-router-dom";
import Menu from "../components/Menu";
import  Users  from "../components/Users";
import  Posts  from "../components/Posts";
import  Comments  from "../components/Comments";
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
    <main>
      <Outlet />
    </main>
  </>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/users" replace /> },

      {
        path: "users",
        element: <Users />,
        children: [
          { path: "jsonplaceholder", element: <UsersJsonPlaceholderPage /> },
          { path: "dummyjson", element: <UsersDummyJsonPage /> },
        ],
      },

      {
        path: "posts",
        element: <Posts />,
        children: [
          { path: "jsonplaceholder", element: <PostsJsonPlaceholderPage /> },
          { path: "dummyjson", element: <PostsDummyJsonPage /> },
        ],
      },

      {
        path: "comments",
        element: <Comments />,
        children: [
          { path: "jsonplaceholder", element: <CommentsJsonPlaceholderPage /> },
          { path: "dummyjson", element: <CommentsDummyJsonPage /> },
        ],
      },

      { path: "*", element: <Navigate to="/users" replace /> },
    ],
  },
];

export default routes;
