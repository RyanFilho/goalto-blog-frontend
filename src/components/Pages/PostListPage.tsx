import Post from '../Atoms/Post';
import { DefaultLayout } from '../Templates/DefaultLayout';
import { getAll } from "../../services/PostService";

export function PostListPage () {
  const posts = getAll();
  return (
    <DefaultLayout>      
      <div className="row">
        <div className="col">
        { posts ? (posts.map((post) => (<Post post={post} />)) ) : <h1>There are no Posts registered yet!</h1>}
        </div>
      </div>
    </DefaultLayout>
  );
};
