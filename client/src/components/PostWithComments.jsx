import React from "react";

const PostWithComments = ({ post }) => {
  const comments = post.comments;

  //   if (!post.length) {
  //     return <h3>No Post to display</h3>;
  //   }

  return (
    <div className="border-2 m-3 p-3">
      <h4>{post.title}</h4>
      <p>{post.postBody}</p>
      <h5>Posted By: {post.postAuthor}</h5>
      <h6>Posted At: {post.createdAt}</h6>
      <div>
        {comments.map((comment) => (
          <div key={comment._id} className="border-2 my-3 p-3">
            <p>{comment.commentText}</p>
            <h6>{comment.commentAuthor}</h6>
            <h6>{comment.createdAt}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWithComments;
