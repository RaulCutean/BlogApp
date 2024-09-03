import React from "react";
import { Post } from "./Post";
export const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};
