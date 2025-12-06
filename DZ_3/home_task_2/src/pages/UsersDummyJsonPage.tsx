import React, { useEffect, useState } from "react";
import type { UserDummyJson } from "../models/UserDummyJson";
import "../styles/DataPage.css";

const UsersDummyJsonPage: React.FC = () => {
  const [users, setUsers] = useState<UserDummyJson[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserDummyJson | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">⏳ Завантаження...</div>;

  return (
    <div className="data-page">
      <div className="list-container">
        <h2>👥 Users DummyJSON</h2>
        <div className="list">
          {users.map(user => (
            <div
              key={user.id}
              className="list-item"
              onClick={() => setSelectedUser(user)}
            >
              <div className="item-header">{user.firstName} {user.lastName}</div>
              <div className="item-meta">@{user.username} • {user.email}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedUser && (
        <div className="detail-container">
          <button className="close-btn" onClick={() => setSelectedUser(null)}>✕</button>
          <div className="detail-card">
            <img src={selectedUser.image} alt={selectedUser.firstName} className="user-avatar" />
            <h3>{selectedUser.firstName} {selectedUser.lastName}</h3>
            <div className="detail-section">
              <p><strong>Username:</strong> @{selectedUser.username}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Age:</strong> {selectedUser.age}</p>
              <p><strong>Gender:</strong> {selectedUser.gender}</p>
            </div>
            <div className="detail-section">
              <h4>📍 Address</h4>
              <p>{selectedUser.address.address}</p>
              <p>{selectedUser.address.city}, {selectedUser.address.state}</p>
              <p>🌍 Country: {selectedUser.address.country}</p>
            </div>
            <div className="detail-section">
              <h4>🏢 Company</h4>
              <p><strong>{selectedUser.company.name}</strong></p>
              <p>Department: {selectedUser.company.department}</p>
              <p>Title: {selectedUser.company.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersDummyJsonPage;