import React, { useEffect, useState } from "react";
import type { PostJsonPlaceholder } from "../models/PostJsonPlaceholder";
import "../styles/DataPage.css";

const PostsJsonPlaceholderPage: React.FC = () => {
  const [posts, setPosts] = useState<PostJsonPlaceholder[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<PostJsonPlaceholder | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((data: PostJsonPlaceholder[]) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">⏳ Завантаження...</div>;

  return (
    <div className="data-page">
      <div className="list-container">
        <h2>📝 Posts JSONPlaceholder</h2>
        <div className="list">
          {posts.map(post => (
            <div
              key={post.id}
              className="list-item"
              onClick={() => setSelectedPost(post)}
            >
              <div className="item-header">{post.title}</div>
              <div className="item-meta">User ID: {post.userId} • Post ID: {post.id}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="detail-container">
          <button className="close-btn" onClick={() => setSelectedPost(null)}>✕</button>
          <div className="detail-card">
            <h3>{selectedPost.title}</h3>
            <div className="detail-section">
              <p><strong>Post ID:</strong> {selectedPost.id}</p>
              <p><strong>User ID:</strong> {selectedPost.userId}</p>
            </div>
            <div className="detail-section">
              <h4>Content</h4>
              <p>{selectedPost.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsJsonPlaceholderPage;