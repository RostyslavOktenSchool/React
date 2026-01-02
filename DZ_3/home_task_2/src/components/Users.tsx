// UsersPage.tsx
import { NavLink, Outlet } from "react-router-dom";

const Users: React.FC = () => (
  <div>
    <h2>Users</h2>
    <ul>
      <li><NavLink to="jsonplaceholder">JSONPlaceholder Users</NavLink></li>
      <li><NavLink to="dummyjson">DummyJSON Users</NavLink></li>
    </ul>
    <Outlet />
  </div>
);

export default Users;