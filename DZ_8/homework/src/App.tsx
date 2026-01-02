
import {Outlet, NavLink} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <NavLink to="/complex">Complex</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
