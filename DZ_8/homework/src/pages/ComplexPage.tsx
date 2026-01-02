
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {loadUsers} from '../features/users/usersSlice';
import {loadPosts} from '../features/posts/postsSlice';
import {loadComments} from '../features/comments/commentsSlice';
import type {IUser} from '../models/IUser';
import type {IPost} from '../models/IPost';
import type {IComment} from '../models/IComment';

export default function ComplexPage() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((s) => s.users.items);
  const posts = useAppSelector((s) => s.posts.items);
  const comments = useAppSelector((s) => s.comments.items);

  useEffect(() => {
    if (!users.length) dispatch(loadUsers());
    if (!posts.length) dispatch(loadPosts());
    if (!comments.length) dispatch(loadComments());
  }, [users.length, posts.length, comments.length, dispatch]);

  const ready = users.length > 0 && posts.length > 0 && comments.length > 0;

  return (
    <div>
      <h2>Complex Page</h2>
      {!ready && <p>Store is not filled yet!</p>}
      {ready &&
        users.map((u: IUser) => (
          <div key={u.id}>
            <h3>{u.name}</h3>
            {posts
              .filter((p: IPost) => p.userId === u.id)
              .map((p: IPost) => (
                <div key={p.id}>
                  <strong>{p.title}</strong>
                  {comments
                    .filter((c: IComment) => c.postId === p.id)
                    .map((c: IComment) => (
                      <p key={c.id}>{c.body}</p>
                    ))}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}