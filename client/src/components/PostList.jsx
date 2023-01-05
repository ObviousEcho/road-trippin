import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/posts/${post._id}`} key={post._id}>
          <div className="border-2 m-3 p-3 sm:w-full md:w-3/5">
            <h4>{post.title}</h4>
            <p>{post.postBody}</p>
            <h5>Posted By: {post.postAuthor}</h5>
            <h6>Posted At: {post.createdAt}</h6>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
