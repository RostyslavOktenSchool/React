import React, { useEffect, useState } from "react";
import type { PostDummyJson } from "../models/PostDummyJson";
import "../styles/DataPage.css";

const PostsDummyJsonPage: React.FC = () => {
  const [posts, setPosts] = useState<PostDummyJson[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<PostDummyJson | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">⏳ Завантаження...</div>;

  return (
    <div className="data-page">
      <div className="list-container">
        <h2>📝 Posts DummyJSON</h2>
        <div className="list">
          {posts.map(post => (
            <div
              key={post.id}
              className="list-item"
              onClick={() => setSelectedPost(post)}
            >
              <div className="item-header">{post.title}</div>
              <div className="item-meta">👁️ {post.views} views • 👍 {post.reactions.likes}</div>
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
            <div className="detail-section stats">
              <span>👁️ Views: {selectedPost.views}</span>
              <span>👍 Likes: {selectedPost.reactions.likes}</span>
              <span>👎 Dislikes: {selectedPost.reactions.dislikes}</span>
              {selectedPost.tags.length > 0 && (
                <div className="tags">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsDummyJsonPage;