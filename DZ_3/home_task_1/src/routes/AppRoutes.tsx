import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import { RoutePaths } from "../models/RoutePaths";
import UsersJsonPlaceholder from "../components/placeholders/UsersJsonPlaceholder";
import UsersDummyJson from "../components/placeholders/UsersDummyJson";
import PostsJsonPlaceholder from "../components/placeholders/PostJsonPlaceholder";
import PostsDummyJson from "../components/placeholders/PostDummyJson";
import CommentsJsonPlaceholder from "../components/placeholders/CommentsJsonPlaceholder";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu /> {}
      <Routes>
        <Route path={RoutePaths.USERS_JSON} element={<UsersJsonPlaceholder />} />
        <Route path={RoutePaths.USERS_DUMMY} element={<UsersDummyJson />} />
        <Route path={RoutePaths.POSTS_JSON} element={<PostsJsonPlaceholder />} />
        <Route path={RoutePaths.POSTS_DUMMY} element={<PostsDummyJson />} />
        <Route path={RoutePaths.COMMENTS_JSON} element={<CommentsJsonPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
