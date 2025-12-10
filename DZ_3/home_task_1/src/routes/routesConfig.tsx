import React from "react";
import { Outlet, Navigate, NavLink, Link } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { RoutePaths } from "../models/RoutePaths";
import UsersJsonPlaceholder from "../components/placeholders/UsersJsonPlaceholder";
import UsersDummyJson from "../components/placeholders/UsersDummyJson";
import PostsJsonPlaceholder from "../components/placeholders/PostJsonPlaceholder";
import PostsDummyJson from "../components/placeholders/PostDummyJson";
import CommentsJsonPlaceholder from "../components/placeholders/CommentsJsonPlaceholder";

const Layout: React.FC = () => (
  <>
    <header>
      <nav>
        <ul>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/comments">Comments</NavLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

const UsersParent: React.FC = () => (
  <section>
    <h2>Users</h2>
    <ul>
      <li><Link to="jsonplaceholder">JSONPlaceholder</Link></li>
      <li><Link to="dummyjson">DummyJSON</Link></li>
    </ul>
    <Outlet />
  </section>
);

const PostsParent: React.FC = () => (
  <section>
    <h2>Posts</h2>
    <ul>
      <li><Link to="jsonplaceholder">JSONPlaceholder</Link></li>
      <li><Link to="dummyjson">DummyJSON</Link></li>
    </ul>
    <Outlet />
  </section>
);

const CommentsParent: React.FC = () => (
  <section>
    <h2>Comments</h2>
    <ul>
      <li><Link to="jsonplaceholder">JSONPlaceholder</Link></li>
    </ul>
    <Outlet />
  </section>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [

      { index: true, element: <Navigate to="/users" replace /> },

      {
        path: "users",
        element: <UsersParent />,
        children: [
          { index: true, element: <div> jsonplaceholder або dummyjson</div> },
          { path: "jsonplaceholder", element: <UsersJsonPlaceholder /> },
          { path: "dummyjson", element: <UsersDummyJson /> },
        ],
      },

      {
        path: "posts",
        element: <PostsParent />,
        children: [
          { index: true, element: <div>jsonplaceholder або dummyjson</div> },
          { path: "jsonplaceholder", element: <PostsJsonPlaceholder /> },
          { path: "dummyjson", element: <PostsDummyJson /> },
        ],
      },

      {
        path: "comments",
        element: <CommentsParent />,
        children: [
          { index: true, element: <div> jsonplaceholder</div> },
          { path: "jsonplaceholder", element: <CommentsJsonPlaceholder /> },
        ],
      },

      ...(RoutePaths.USERS_JSON
        ? [{ path: RoutePaths.USERS_JSON.replace(/^\//, ""), element: <Navigate to="/users" state={{ targetChild: "json" }} replace={false} /> }]
        : []),
      ...(RoutePaths.USERS_DUMMY
        ? [{ path: RoutePaths.USERS_DUMMY.replace(/^\//, ""), element: <Navigate to="/users" state={{ targetChild: "dummy" }} replace={false} /> }]
        : []),
      ...(RoutePaths.POSTS_JSON
        ? [{ path: RoutePaths.POSTS_JSON.replace(/^\//, ""), element: <Navigate to="/posts" state={{ targetChild: "json" }} replace={false} /> }]
        : []),
      ...(RoutePaths.POSTS_DUMMY
        ? [{ path: RoutePaths.POSTS_DUMMY.replace(/^\//, ""), element: <Navigate to="/posts" state={{ targetChild: "dummy" }} replace={false} /> }]
        : []),
      ...(RoutePaths.COMMENTS_JSON
        ? [{ path: RoutePaths.COMMENTS_JSON.replace(/^\//, ""), element: <Navigate to="/comments" state={{ targetChild: "json" }} replace={false} /> }]
        : []),
    ],
  },
];

export default routes;
