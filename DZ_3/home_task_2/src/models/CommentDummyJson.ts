export interface CommentUser {
  id: number;
  username: string;
  fullName: string;
}

export interface CommentDummyJson {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: CommentUser;
}
