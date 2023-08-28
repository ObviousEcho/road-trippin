import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_POST } from "../utils/queries";

import PostWithComments from "../components/PostWithComments";

const SinglePost = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: id },
  });

  const post = data?.post || {};

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
