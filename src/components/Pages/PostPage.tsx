import { useParams } from "react-router-dom";
import Post from '../Atoms/Post';
import { DefaultLayout } from '../Templates/DefaultLayout';
import { getPost } from "../../services/PostService";

export function PostPage () {
  let { id } = useParams(); 
  const post = getPost(Number(id));
  return (
    <DefaultLayout>      
      <div className="row">
        <div className="col">
        { post ? (<Post post={post} />) : <h1>Post not found!</h1>}
        </div>
      </div>
    </DefaultLayout>
  );
};
