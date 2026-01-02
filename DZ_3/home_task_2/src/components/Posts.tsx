// PostsPage.tsx
import { NavLink, Outlet } from "react-router-dom";

const Posts: React.FC = () => (
  <div>
    <h2>Posts</h2>
    <ul>
      <li><NavLink to="jsonplaceholder">JSONPlaceholder Posts</NavLink></li>
      <li><NavLink to="dummyjson">DummyJSON Posts</NavLink></li>
    </ul>
    <Outlet />
  </div>
);

export default Posts;