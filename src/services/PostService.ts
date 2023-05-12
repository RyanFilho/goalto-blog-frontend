import { IPost } from "../entities/IPost";
import data from "../assets/posts.json";

const POSTS_KEY = "blogPosts";

const getPosts = (): IPost[] => {
  const postsJSON = localStorage.getItem(POSTS_KEY);
  if (postsJSON) {
    return JSON.parse(postsJSON);
  } else {
    return [];
  }
};

const addPost = (post: IPost): void => {
  const posts = getPosts();
  const newPost = { ...post, id: posts?.length + 1 };
  localStorage.setItem(POSTS_KEY, JSON.stringify([...posts, newPost]));
};

const resetData = (): void => {
  localStorage.setItem('blogPosts', JSON.stringify(data));
};

export { getPosts, addPost, resetData };
