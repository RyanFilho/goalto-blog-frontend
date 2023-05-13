import { IPost } from '../../../entities/IPost';
import "./index.scss"

export interface IPostProps {
  post: IPost;
}

export function Post({ post }: IPostProps) {
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p className="author">Author: {post.author}</p>
      <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default Post;
