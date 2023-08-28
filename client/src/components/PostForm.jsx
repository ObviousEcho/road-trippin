import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import Auth from "../utils/auth";

const PostForm = ({ title, tripId }) => {
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
    try {
      console.log({
        tripId,
        title,
        postBody: postState,
        postAuthor: Auth.getProfile().data.username,
      });

      const { data } = await addPost({
        variables: {
          tripId: tripId,
          title: title,
          postBody: postState,
          postAuthor: Auth.getProfile().data.username,
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
    <div className="m-3">
      <h4 className="text-2xl mb-1">Add a new post:</h4>
      {Auth.loggedIn() ? (
        <>
          <h5 className="text-xl">Title: {title}</h5>
          <form onSubmit={handlePostSubmit}>
            <textarea
              name="postState"
              value={postState}
              placeholder="Travel blog!"
              className="border-2 ml-3 mt-3 sm:w-full md:w-1/2 h-40"
              onChange={handlePostChange}
            />
            <br />
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center m-5"
              type="submit"
            >
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
