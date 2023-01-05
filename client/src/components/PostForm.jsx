import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import Auth from "../utils/auth";

const PostForm = ({ title }) => {
  const [postState, setpostState] = useState("");

  const [addPost, { error }] = useMutation(ADD_POST);

  const handlePostChange = (e) => {
    const { name, value } = e.target;

    if (name === "postState" && value.length <= 2000) {
      setpostState(value);
    }
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(title, postState);
    try {
      const { data } = await addPost({
        variables: {
          title,
          postBody: postState,
        },
      });
      console.log(data);
      if (!data) {
        throw new Error("something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
    setpostState("");
  };

  return (
    <div>
      <h4>Add a new post:</h4>
      {Auth.loggedIn() ? (
        <>
          <h5>Title: {title}</h5>
          <form onSubmit={handlePostSubmit}>
            <textarea
              name="postState"
              value={postState}
              placeholder="Travel blog!"
              className="border-2"
              onChange={handlePostChange}
            />
            <button className="border-2 m-3" type="submit">
              Post It!
            </button>
            {error && <div>{error.message}</div>}
          </form>
        </>
      ) : (
        <p>You must be logged in to Post!</p>
      )}
    </div>
  );
};

export default PostForm;
