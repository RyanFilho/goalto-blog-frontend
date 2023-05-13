import { IPost } from "../entities/IPost";
import data from "../assets/posts.json";

const POSTS_KEY = "blogPosts";

const getPost = (id: number): IPost => {
  const postsJSON = localStorage.getItem(POSTS_KEY);
  const posts = JSON.parse(postsJSON ?? "");
  const post = posts.filter((i: any) => i.id == id);
  return post.length > 0 ? post[0] : null;
}
  

const getAll = (): IPost[] => {
  const postsJSON = localStorage.getItem(POSTS_KEY);
  if (postsJSON) {
    return JSON.parse(postsJSON);
  } else {
    return [];
  }
};

const addPost = (post: IPost): void => {
  const posts = getAll();
  const newPost = { ...post, id: posts?.length + 1 };
  localStorage.setItem(POSTS_KEY, JSON.stringify([...posts, newPost]));
};

const resetData = (): void => {
  localStorage.setItem('blogPosts', JSON.stringify(data));
};

export { getPost, getAll, addPost, resetData };
