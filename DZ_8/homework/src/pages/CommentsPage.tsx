
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import type {IComment} from '../models/IComment';
import {loadComments} from '../features/comments/commentsSlice';

export default function CommentsPage() {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((s) => s.comments.items);

  useEffect(() => {
    if (!comments.length) {
      dispatch(loadComments());
    }
  }, [comments.length, dispatch]);

  return (
    <div>
      <h2>Comments</h2>
      {comments.slice(0, 10).map((c: IComment) => (
        <p key={c.id}>{c.body}</p>
      ))}
    </div>
  );
}