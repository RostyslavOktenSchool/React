import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="menu-title">🌐 API List</h1>
        <div className="menu-links">
          <NavLink to="/users" className="menu-link">
            👥 Users
          </NavLink>
          <NavLink to="/posts" className="menu-link">
            📝 Posts
          </NavLink>
          <NavLink to="/comments" className="menu-link">
            💬 Comments
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Menu;