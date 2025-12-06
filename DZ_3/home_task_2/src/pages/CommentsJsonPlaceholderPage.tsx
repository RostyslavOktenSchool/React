import React, { useEffect, useState } from "react";
import type { CommentJsonPlaceholder } from "../models/CommentJsonPlaceholder";
import "../styles/DataPage.css";

const CommentsJsonPlaceholderPage: React.FC = () => {
  const [comments, setComments] = useState<CommentJsonPlaceholder[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedComment, setSelectedComment] = useState<CommentJsonPlaceholder | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then((data: CommentJsonPlaceholder[]) => {
        setComments(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">⏳ Завантаження...</div>;

  return (
    <div className="data-page">
      <div className="list-container">
        <h2>💬 Comments JSONPlaceholder</h2>
        <div className="list">
          {comments.map(comment => (
            <div
              key={comment.id}
              className="list-item"
              onClick={() => setSelectedComment(comment)}
            >
              <div className="item-header">{comment.name}</div>
              <div className="item-meta">{comment.email} • Post {comment.postId}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedComment && (
        <div className="detail-container">
          <button className="close-btn" onClick={() => setSelectedComment(null)}>✕</button>
          <div className="detail-card">
            <h3>{selectedComment.name}</h3>
            <div className="detail-section">
              <p><strong>Email:</strong> {selectedComment.email}</p>
              <p><strong>Post ID:</strong> {selectedComment.postId}</p>
              <p><strong>Comment ID:</strong> {selectedComment.id}</p>
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

export default CommentsJsonPlaceholderPage;