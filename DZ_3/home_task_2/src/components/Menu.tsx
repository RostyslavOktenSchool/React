import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="menu-title">🌐 Users API List</h1>
        <div className="menu-links">
          <Link to="/users/jsonplaceholder" className="menu-link">
            👥 JSONPlaceholder Users
          </Link>
          <Link to="/users/dummyjson" className="menu-link">
            👥 DummyJSON Users
          </Link>
          <Link to="/posts/jsonplaceholder" className="menu-link">
            📝 JSONPlaceholder Posts
          </Link>
          <Link to="/posts/dummyjson" className="menu-link">
            📝 DummyJSON Posts
          </Link>
          <Link to="/comments/jsonplaceholder" className="menu-link">
            💬 JSONPlaceholder Comments
          </Link>
          <Link to="/comments/dummyjson" className="menu-link">
            💬 DummyJSON Comments
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;