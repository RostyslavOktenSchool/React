
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import type {IPost} from '../models/IPost';
import {loadPosts} from '../features/posts/postsSlice';

export default function PostsPage() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((s) => s.posts.items);

  useEffect(() => {
    if (!posts.length) {
      dispatch(loadPosts());
    }
  }, [posts.length, dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 10).map((p: IPost) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}