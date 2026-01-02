// CommentsPage.tsx
import { NavLink, Outlet } from "react-router-dom";

const Comments: React.FC = () => (
  <div>
    <h2>Comments</h2>
    <ul>
      <li><NavLink to="jsonplaceholder">JSONPlaceholder Comments</NavLink></li>
      <li><NavLink to="dummyjson">DummyJSON Comments</NavLink></li>
    </ul>
    <Outlet />
  </div>
);

export default Comments;