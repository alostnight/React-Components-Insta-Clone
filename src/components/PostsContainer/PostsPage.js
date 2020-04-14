import React, { useState } from "react";
import PostHead from "./PostHeader";
import Post from "./Post";
import Likes from "./LikeSection";
import "./Posts.css";
import dummyData from "../../dummy-data";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  return (
    <div className="posts-container-wrapper">
      {props.data.map((item, index) => {
        return <Post key={index} post={item} />;
      })}
    </div>
  );
};

export default PostsPage;

