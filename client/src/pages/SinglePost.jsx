import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_POST } from "../utils/queries";

import PostWithComments from "../components/PostWithComments";

const SinglePost = () => {
  const { postId: postParam } = useParams();

  // this returns undefined despite the id being in the url,
  // the path in App.js is setup corectly also
  //  ???
  console.log(postParam);

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: "63b745f360469c0022ae2b54" },
    // variables: { postId: postParam },
  });

  const post = data?.post || {};

  console.log(post);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostWithComments post={post} />
    </div>
  );
};

export default SinglePost;
