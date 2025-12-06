import React, { useEffect, useState } from "react";
import type { UserJsonPlaceholder } from "../models/UserJsonPlaceholder";
import "../styles/DataPage.css";

const UsersJsonPlaceholderPage: React.FC = () => {
  const [users, setUsers] = useState<UserJsonPlaceholder[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserJsonPlaceholder | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((data: UserJsonPlaceholder[]) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">⏳ Завантаження...</div>;

  return (
    <div className="data-page">
      <div className="list-container">
        <h2>👥 Users JSONPlaceholder</h2>
        <div className="list">
          {users.map(user => (
            <div
              key={user.id}
              className="list-item"
              onClick={() => setSelectedUser(user)}
            >
              <div className="item-header">{user.name}</div>
              <div className="item-meta">@{user.username} • {user.email}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedUser && (
        <div className="detail-container">
          <button className="close-btn" onClick={() => setSelectedUser(null)}>✕</button>
          <div className="detail-card">
            <h3>{selectedUser.name}</h3>
            <div className="detail-section">
              <p><strong>Username:</strong> @{selectedUser.username}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>ID:</strong> {selectedUser.id}</p>
            </div>
            <div className="detail-section">
              <h4>📍 Address</h4>
              <p>{selectedUser.address.street}, {selectedUser.address.suite}</p>
              <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p>
              <p>📌 Geo: {selectedUser.address.geo.lat}, {selectedUser.address.geo.lng}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersJsonPlaceholderPage;