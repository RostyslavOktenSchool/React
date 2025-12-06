import React, { useEffect, useState } from "react";
import type { CommentDummyJson } from "../models/CommentDummyJson";
import "../styles/DataPage.css";

const CommentsDummyJsonPage: React.FC = () => {
  const [comments, setComments] = useState<CommentDummyJson[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedComment, setSelectedComment] = useState<CommentDummyJson | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then(res => res.json())
      .then(data => {
        setComments(data.comments);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">⏳ Завантаження...</div>;

  return (
    <div className="data-page">
      <div className="list-container">
        <h2>💬 Comments DummyJSON</h2>
        <div className="list">
          {comments.map(comment => (
            <div
              key={comment.id}
              className="list-item"
              onClick={() => setSelectedComment(comment)}
            >
              <div className="item-header">{comment.user.fullName}</div>
              <div className="item-meta">@{comment.user.username} • Post {comment.postId}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedComment && (
        <div className="detail-container">
          <button className="close-btn" onClick={() => setSelectedComment(null)}>✕</button>
          <div className="detail-card">
            <h3>{selectedComment.user.fullName}</h3>
            <div className="detail-section">
              <p><strong>Username:</strong> @{selectedComment.user.username}</p>
              <p><strong>Post ID:</strong> {selectedComment.postId}</p>
              <p><strong>Comment ID:</strong> {selectedComment.id}</p>
              <p><strong>👍 Likes:</strong> {selectedComment.likes}</p>
            </div>
            <div className="detail-section">
              <h4>Comment</h4>
              <p>{selectedComment.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsDummyJsonPage;