"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="prompt_layout">
      {data?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const filteredPosts = posts.filter((post) => {
      return (
        post.prompt.includes(e.target.value) ||
        post.creator.username.includes(e.target.value) ||
        post.tag.includes(e.target.value)
      );
    });
    setUpdatedPost(filteredPosts);
  };
  console.log(posts);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
      setUpdatedPost(data);
    };
    fetchPost();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={updatedPost} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
