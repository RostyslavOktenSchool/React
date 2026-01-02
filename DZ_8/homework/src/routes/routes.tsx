
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import UsersPage from '../pages/UsersPage';
import PostsPage from '../pages/PostsPage';
import CommentsPage from '../pages/CommentsPage';
import ComplexPage from '../pages/ComplexPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: 'users', element: <UsersPage />},
      {path: 'posts', element: <PostsPage />},
      {path: 'comments', element: <CommentsPage />},
      {path: 'complex', element: <ComplexPage />},
    ],
  },
]);