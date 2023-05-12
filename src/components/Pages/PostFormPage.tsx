import { PostForm } from '../Molecules/Form';
import { DefaultLayout } from '../Templates/DefaultLayout';

export function PostFormPage () {
  return (
    <DefaultLayout>      
      <div className="row">
        <div className="col">
          <PostForm/>
        </div>
      </div>
    </DefaultLayout>
  );
};
