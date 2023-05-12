import React, { useState } from "react";
import { addPost } from "../../../services/PostService";
import { IPost } from "../../../entities/IPost";
import { Input } from "../../Atoms/Input";
import { Snackbar } from "../../Atoms/Snackbar";

export function PostForm () {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value);
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: IPost = {
      id: 0,
      title,
      content,
      author,
    };
    await addPost(post);
    setTitle("");
    setContent("");
    setAuthor("");
    setShowSnackbar(true);
    setTimeout(() => { setShowSnackbar(false); }, 7000)
  };

  return (
    <div>
      <h2>Create a new post</h2>      
      { showSnackbar && (<Snackbar message="Post created!" onClose={() => setShowSnackbar(false)}/>) }
      <form className="post-form" onSubmit={handleSubmit} >
        <Input 
          type="text"
          label="Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <br/>
        <Input
          type="text"
          label="Content"
          value={content}
          onChange={handleContentChange}
          required
        />
        <br/>
        <Input 
          type="text"
          label="Author"
          value={author}
          onChange={handleAuthorChange}
          required
        />
        <br/>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};
