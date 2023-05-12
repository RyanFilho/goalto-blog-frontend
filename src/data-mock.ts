import data from "./assets/posts.json";

export default function LoadDataMock() { 
  localStorage.setItem('blogPosts', JSON.stringify(data));
}