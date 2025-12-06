import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
import UsersJsonPlaceholderPage from "../pages/UsersJsonPlaceholderPage";
import UsersDummyJsonPage from "../pages/UsersDummyJsonPage";
import PostsJsonPlaceholderPage from "../pages/PostsJsonPlaceholderPage";
import PostsDummyJsonPage from "../pages/PostsDummyJsonPage";
import CommentsJsonPlaceholderPage from "../pages/CommentsJsonPlaceholderPage";
import CommentsDummyJsonPage from "../pages/CommentsDummyJsonPage";

const AppRoutes: React.FC = () => (
  <>
    <Menu />
    <Routes>
      <Route path="/users/jsonplaceholder" element={<UsersJsonPlaceholderPage />} />
      <Route path="/users/dummyjson" element={<UsersDummyJsonPage />} />
      <Route path="/posts/jsonplaceholder" element={<PostsJsonPlaceholderPage />} />
      <Route path="/posts/dummyjson" element={<PostsDummyJsonPage />} />
      <Route path="/comments/jsonplaceholder" element={<CommentsJsonPlaceholderPage />} />
      <Route path="/comments/dummyjson" element={<CommentsDummyJsonPage />} />
      <Route path="*" element={<Navigate to="/users/jsonplaceholder" replace />} />
    </Routes>
  </>
);

export default AppRoutes;
